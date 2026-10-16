const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const User = require("./auth.model")
const technician = require("../technician/technician.model")
const Session = require("./auth.session.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const createError = require("../../utils/creatorError")

const INACTIVITY_TIMEOUT = 30 * 24 * 60 * 60 * 1000  //30 days
const MAX_SESSION_LIFETIME = 90 * 24 * 60 * 60 * 1000  //90 days
//register user service
const registerUser = async (body) => {
    const { name, email, phone, password, role, skills, experienceYears, availability } = body

    if (!name || !email || !phone || !password || !role) {
        throw createError("All fields are required", 400)
    }

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!EMAIL_REGEX.test(email.trim())) {
        throw createError("Invalid email format", 400)
    }

    if (!["CUSTOMER", "TECHNICIAN"].includes(role)) {
        throw createError("Invalid role", 400)
    }

    if (password.length < 6) {
        throw createError("Password at least 6 characters", 400)
    }

    //finding user with existing email
    const existingEmail = await User.findOne({ email })
    if (existingEmail) {
        throw createError("Already user exists provided email", 409)
    }
    //check phone alredy exists
    const existingPhone = await User.findOne({ phone })
    if (existingPhone) {
        throw createError('Already user exists with provided number', 409)
    }
    //technician profile
    if (role === "TECHNICIAN") {
        if (!skills || !Array.isArray(skills) || skills.length === 0) {
            throw createError("Technician Skill are required", 400)
        }
        if (experienceYears === undefined || experienceYears === null || isNaN(experienceYears) || Number(experienceYears) < 0) {
            throw createError("Technician experience Years must be a non negative number", 400)
        }
        const validAvailability = ["weekend", "24/7", "weekdays"]
        if (!validAvailability.includes(availability)) {
            throw createError(`Availability must be one of ${validAvailability.join(",")}`, 400)
        }
    }
    //password hasing
    const passwordhash = await bcrypt.hash(password, 10)

    //determining initial account status
    const accountStatus = role === "TECHNICIAN" ? "PENDING_APPROVAL" : "ACTIVE"

    const session = await mongoose.startSession()
    let user;
    //creating user
    try {
        session.startTransaction()
        const users = await User.create([{
            name, email, phone, password: passwordhash, role, accountStatus
        }], { session })
        user = users[0]
        //creating technician profile
        if (role === "TECHNICIAN") {
            //creating technician profile
            await technician.create([{
                userId: user._id,
                skills,
                experienceYears,
                availability
            }], { session })
        }

        //everything succeeded
        await session.commitTransaction()
    } catch (error) {
        //something failed undo transaction
        await session.abortTransaction()
        throw error
    } finally {
        session.endSession()
    }



    //return user
    return { id: user.id, name: name }

}

//login user service
const loginUser = async ({ email, password }, requestInfo = {}) => {

    //validating inputs
    if (typeof email !== "string" || !email.trim() || typeof password !== "string" || !password) {
        throw createError("Email and password are required", 400)
    }

    if (!process.env.JWT_ACCESS_SECRET) {
        throw error("JWT_ACCESS_SECRET is not configured")
    }

    //find the user by email
    const normalizedEmail = email.trim().toLowerCase()
    const user = await User.findOne({ email: normalizedEmail }).select("password")
    if (!user) {
        throw createError("Invalid email or password", 401)
    }

    //comparing stored password with netered password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) throw createError("Invalid email or password", 401)

    // checking whether this account is allowed to login
    if (user.accountStatus !== "ACTIVE") {
        const message = {
            PENDING_APPROVAL: "Your account is awaiting approval",
            INACTIVE: "Your account is inactive",
            SUSPENDED: "Your account has been suspended",
            BLOCKED: "Your account has been blocked",
            REJECTED: "Your account application was rejected",
        }
        throw createError(message[user.accountStatus] || "Your account is not allowed to login", 403)
    }
    // Create a short-lived access token
    const accessToken = jwt.sign(
        {
            userId: user._id.toString(),
            role: user.role,
        },
        process.env.JWT_ACCESS_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_LIFETIME,
        }
    );

    // Generate a random refresh token
    const refreshToken = crypto.randomBytes(64).toString("hex");

    // Store only its SHA-256 hash in MongoDB
    const refreshTokenHash = crypto
        .createHash("sha256")
        .update(refreshToken)
        .digest("hex");

    //Set the initial session expiry dates
    const now = Date.now();

    const expiresAt = new Date(now + INACTIVITY_TIMEOUT);

    const absoluteExpiresAt = new Date(
        now + MAX_SESSION_LIFETIME
    );

    //Create one session for this login
    await Session.create({
        userId: user._id,
        refreshTokenHash,
        device: requestInfo.device || "Unknown device",
        lastUsedAt: new Date(now),
        expiresAt,
        absoluteExpiresAt,
    });

    // Return tokens and safe user details
    return {
        accessToken,
        refreshToken,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            accountStatus: user.accountStatus,
        },
    };





}

module.exports = { registerUser, loginUser }