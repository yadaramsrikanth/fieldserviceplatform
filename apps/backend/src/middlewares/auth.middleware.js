const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        //checking whether the token was provided or not
        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({
                success: false,
                message: "Access token is required"
            })
        }

        const token = authHeader.split(" ")[1]

        //verifying token signature and verify
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
        //attaching user info
        req.user = { userId: decoded.userId, role: decoded.role }
        next()


    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Access token expired"
            })
        }
        return res.status(401).json({
            success: false,
            message: "Invalid access token"
        })
    }
}

module.exports = authMiddleware