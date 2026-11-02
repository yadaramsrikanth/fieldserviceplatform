const express = require("express")
const router = express.Router()

const { adminUserSignUp, adminDashLogin } = require("./adminauth.controller")

router.post("/signup", adminUserSignUp)
router.post("/login", adminDashLogin)

module.exports = router