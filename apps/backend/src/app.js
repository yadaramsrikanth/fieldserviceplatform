const express = require("express")
const app = express()



//health check
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Fsp api running successfullly" })
})


module.exports = app