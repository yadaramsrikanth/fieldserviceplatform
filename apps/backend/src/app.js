const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
//authentication routes
const authRoutes = require("../src/modules/auth/auth.routes")

//admin
const adminUserRoutes = require("../src/modules/admin/adminauth/adminauth.routes")

//core middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
//authentication api path
app.use("/auth", authRoutes)
app.use("/api/auth/admin", adminUserRoutes)



//health check
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Fsp api running successfullly" })
})


module.exports = app