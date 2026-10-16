const { registerUser, loginUser } = require("./auth.service")

//register controller
const register = async (req, res) => {
    try {

        //register user
        const user = await registerUser(req.body)

        //registartion response
        return res.status(201).json({
            success: true,
            message: "Registration Successful"
        })
    } catch (error) {
        //returning error if registartion failed
        return res.status(error.statusCode || 500).json({
            success: false,
            message: "Registration Failed",
            error: error.message
        })
    }
}

//login controller
const login = async (req, res) => {
    try {
        const result = await loginUser(req.body, { device: req.get("user_agent") })
        return res.status(200).json({
            success: true,
            message: "Login successful",
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


module.exports = { register, login }