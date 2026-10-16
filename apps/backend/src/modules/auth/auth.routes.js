const express = require("express")
const { register, login } = require("./auth.controller")

const router = express.Router()

//register route
router.post("/register", register)
router.post("/login", login)

module.exports = router