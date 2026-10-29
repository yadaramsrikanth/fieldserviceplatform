const bcrypt = require("bcrypt")
const AdminUser = require("./adminauth.model")
const rolePermissions = require("../rolePermissions/rolePermissions.model")
const createError = require("../../../../src/utils/creatorError")
const jwt = require("jsonwebtoken")
//signup admin dashboard service
const adminUserSignUpService = async ({ name, email, password, roleId }) => {
    const normalizedEmail = email.trim().toLowerCase()
    const existingUser = await AdminUser.findOne({ email: normalizedEmail })
    if (existingUser) {
        throw createError("Email is already registered", 409)
    }

    const role = await rolePermissions.findOne({
        _id: roleId,
        isDeleted: false
    })

    if (!role) {
        throw createError("Invalid role", 400)
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        const adminUser = await AdminUser.create({
            name: name.trim(),
            email: normalizedEmail,
            password: hashedPassword,
            roleId: role._id,
            accountStatus: "ACTIVE"
        })

        return {
            id: adminUser._id,
            name: adminUser.name
        }

    } catch (error) {
        if (error.code === 11000) {
            throw createError("Email is already registered", 409);
        }

        throw error;
    }

}

//login admin dashboard service
const adminUserLoginService = async ({ email, password }) => {
    if (!email || !password) {
        throw createError("Email and Password required", 400)
    }
    const normalizedEmail = email.trim().toLowerCase()
    const adminUser = await AdminUser.findOne({
        email: normalizedEmail
    }).select("password accountStatus roleId")
    // console.log(adminUser)
    if (!adminUser) {
        throw createError("Invalid email or password", 401)
    }
    const isPasswordValid = await bcrypt.compare(password, adminUser.password)
    if (!isPasswordValid) {
        throw createError("Invalid email or password", 401)
    }
    if (adminUser.accountStatus !== "ACTIVE") {
        throw createError("Your account is not active", 403);
    }
    const role = await rolePermissions.findOne({
        _id: adminUser.roleId,
        isDeleted: false,
    });

    if (!role) {
        throw createError("Your assigned role is unavailable", 403);
    }

    if (!process.env.JWT_ACCESS_SECRET) {
        throw new Error("JWT_ACCESS_SECRET is not configured");
    }

    const accessToken = jwt.sign(
        {
            sub: adminUser._id.toString(),
            roleId: role._id.toString(),
        },
        process.env.JWT_ACCESS_SECRET_ADMIN,
        { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN_ADMIN || "120m", }
    )
    return {
        accessToken,
        admin: {
            id: adminUser._id,
            name: adminUser.name,
            email: adminUser.email,
            accountStatus: adminUser.accountStatus,
            roleName: role.name,
            roleId: role._id
        }
    }

}

module.exports = { adminUserSignUpService, adminUserLoginService }