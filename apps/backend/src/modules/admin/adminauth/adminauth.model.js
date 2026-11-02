const mongoose = require("mongoose")

const adminUserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    accountStatus: { type: String, enum: ["ACTIVE", "INACTIVE", "SUSPENDED"], default: "ACTIVE", required: true },
    roleId: { type: mongoose.Schema.Types.ObjectId, ref: "rolePermissions", required: true }


}, { timestamps: true })

const AdminUser = mongoose.model("AdminUser", adminUserSchema)
module.exports = AdminUser