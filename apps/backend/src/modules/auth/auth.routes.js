const express = require("express")
const { register, login, logout, refresh } = require("./auth.controller")

const router = express.Router()

//register route
router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/refresh", refresh)

module.exports = router