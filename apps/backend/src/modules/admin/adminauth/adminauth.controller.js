
const { adminUserSignUpService,adminUserLoginService } = require("./adminauth.service")
//registration for admin dashboard by admin or super admin or permissioned one

const adminUserSignUp = async (req, res) => {
    try {
        await adminUserSignUpService(req.body)
        return res.status(201).json({
            success: true,
            message: "User created successfully"
        })
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: "User creation failed",
            error: error.message
        })
    }
}


//login for admin dashboard
const adminDashLogin = async (req, res) => {
    try {
        const result = await adminUserLoginService(req.body)
        return res.status(200).json({
            success: true,
            message: "Login Success",
            data: result
        })

    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: "Login failed",
            error: error.message
        })
    }
}

module.exports = { adminUserSignUp, adminDashLogin }