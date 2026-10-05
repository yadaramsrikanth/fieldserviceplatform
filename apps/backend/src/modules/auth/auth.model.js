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
        addressLine: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true },
        state: { type: String, required: true, trim: true },
        postalCode: { type: String, required: true, trim: true },
        country: { type: String, trim: true, default: "India" }
    }
}, { timestamps: true })


const User = mongoose.model("User", userSchema)
module.exports = User;