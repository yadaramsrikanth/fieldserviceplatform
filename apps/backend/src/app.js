const express = require("express")
const app = express()

//authentication routes
const authRoutes = require("../src/modules/auth/auth.routes")


//authentication api path
app.use("/auth", authRoutes)

//health check
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Fsp api running successfullly" })
})


module.exports = app