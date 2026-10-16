const mongoose = require("mongoose")

const sessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    refreshTokenHash: { type: String, required: true, unique: true },
    device: { type: String, default: "unknown_device" },
    lastUsedAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, required: true },
    absoluteExpiresAt: { type: Date, required: true },
    revokedAt: { type: Date, default: null }

}, { timeStamps: true })

module.exports = mongoose.model("Session", sessionSchema)