const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    phone: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["CUSTOMER", "TECHNICIAN"], required: true },
    accountStatus: { type: String, enum: ["ACTIVE", "INACTIVE", "SUSPENDED", "BLOCKED", "REJECTED", "PENDING_APPROVAL"], default: "ACTIVE" },
    suspensionReason: { type: String, trim: true, default: null },
    blockedReason: { type: String, trim: true, default: null },
    address: {
        addressLine: { type: String, trim: true, default: null },
        city: { type: String, trim: true, default: null },
        state: { type: String, trim: true, default: null },
        postalCode: { type: String, trim: true, default: null },
        country: { type: String, trim: true, default: "India" }
    }
}, { timestamps: true })


const User = mongoose.model("User", userSchema)
module.exports = User;