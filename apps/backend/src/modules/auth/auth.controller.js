const { registerUser } = require("./auth.service")

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


module.exports = { register }