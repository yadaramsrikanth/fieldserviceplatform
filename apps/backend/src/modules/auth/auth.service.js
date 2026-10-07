const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const User = require("./auth.model")
const technician = require("../technician/technician.model")
//register user service
const registerUser = async (body) => {
    const { name, email, phone, password, role, skills, experienceYears, availability } = body

    if (!name || !email || !phone || !password || !role) {
        const error = new Error("All fields are required")
        error.statusCode = 400;
        throw error
    }

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!EMAIL_REGEX.test(email.trim())) {
        const error = new Error("Invalid email format")
        error.statusCode = 400
        throw error
    }

    if (!["CUSTOMER", "TECHNICIAN"].includes(role)) {

        const error = new Error("Invalid role")
        error.statusCode = 400;
        throw error
    }

    if (password.length < 6) {
        const error = new Error("Password at least 6 characters")
        error.statusCode = 400;
        throw error
    }

    //finding user with existing email
    const existingEmail = await User.findOne({ email })
    if (existingEmail) {
        const error = new Error("Already user exists provided email")
        error.statusCode = 409;
        throw error
    }
    //check phone alredy exists
    const existingPhone = await User.findOne({ phone })
    if (existingPhone) {
        const error = new Error('Already user exists with provided number')
        error.statusCode = 409;
        throw error
    }
    //technician profile
    if (role === "TECHNICIAN") {
        if (!skills || !Array.isArray(skills) || skills.length === 0) {
            const error = new Error("Technician Skill are required")
            error.statusCode = 400
            throw error
        }
        if (experienceYears === undefined || experienceYears === null || isNaN(experienceYears) || Number(experienceYears) < 0) {
            const error = new Error("Technician experience Years must be a non negative number")
            error.statusCode = 400
            throw error
        }
        const validAvailability = ["weekend", "24/7", "weekdays"]
        if (!validAvailability.includes(availability)) {
            const error = new Error(`Availability must be one of ${validAvailability.join(",")}`)
            error.statusCode = 400
            throw error
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

module.exports = { registerUser }