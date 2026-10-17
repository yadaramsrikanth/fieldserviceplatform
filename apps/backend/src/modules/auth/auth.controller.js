const { registerUser, loginUser, logoutUser, refreshTokenService } = require("./auth.service")

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
        const clientType = req.body.clientType
        if (!["web", "mobile"].includes(clientType)) {
            return res.status(400).json({
                success: false,
                message: "clientType must be web or mobile",
            });
        }
        const result = await loginUser(req.body, { device: req.get("user_agent") })
        //web : send refrehs token through http cookie
        if (clientType === "web") {
            res.cookie("refreshToken", result.refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 30 * 24 * 60 * 60 * 1000
            })
        }

        const { refreshToken, ...safeResult } = result

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: { ...safeResult, ...(clientType === "mobile" ? { refreshToken } : {}) }
        })

    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: "Login failed",
            error: error.message
        })
    }
}

//logout
const logout = async (req, res) => {
    try {
        const { clientType, refreshToken: mobileRefreshToken } = req.body
        if (!["web", "mobile"].includes(clientType)) {
            return res.status(400).json({
                success: false,
                message: "Invalid client type"
            })
        }
        //web reads the token from http cookie
        //mobile reads the token from req body
        const refreshToken = clientType === "web" ? req.cookies?.refreshToken : mobileRefreshToken
        await logoutUser(refreshToken)
        if (clientType === "web") {
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax"
            })

        }
        return res.status(200).json({
            success: true,
            message: "Logout Successful"
        })
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.statusCode ? error.message : "Internal server error"
        })
    }
}

//refresh token
const refresh = async (req, res) => {
    try {
        const { clientType, refreshToken: mobileRefreshToken } = req.body

        if (!["web", "mobile"].includes(clientType)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid client type'
            })
        }

        //reading the token from appropriate source
        const refreshToken = clientType === "web" ? req.cookies?.refreshToken : mobileRefreshToken
        const result = await refreshTokenService(refreshToken)
        const { refreshToken: newRefreshToken, ...responseData } = result
        if (clientType === "web") {
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 30 * 24 * 60 * 60 * 1000
            })
            return res.status(200).json({
                success: true,
                message: "Token refreshed successfully",
                data: responseData
            })
        }

        return res.status(200).json({
            success: false,
            message: "Token refreshed successfully",
            data: result
        })


    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.statusCode ? error.message : "Internal Server error"
        })
    }
}

module.exports = { register, login, logout, refresh }