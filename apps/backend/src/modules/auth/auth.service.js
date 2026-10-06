const bcrypt = require("bcrypt")
const { User } = require("./auth.model")

//register user service
const registerUser = async (body) => {
    const { name, email, phone, password, role } = body

    if (!name || !email || !phone || !password || !role) {
        const error = new Error("All fields are required")
        error.statusCode = 400;
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
    //password hasing
    const passwordhash = await bcrypt.hash(password, 10)

    //determining initial account status
    const accountStatus = role === "TECHNICIAN" ? "PENDING_APPROVAL" : "ACTIVE"

    //creating user
    const user = await User.create({
        name, email, phone, password: passwordhash, role, accountStatus
    })

    //return user
    return { id: user.id, name: name }

}

module.exports = { registerUser }