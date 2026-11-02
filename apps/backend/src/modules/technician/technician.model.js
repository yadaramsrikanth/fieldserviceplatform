
const mongoose = require("mongoose")

const technicianSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    skills: { type: [String], required: true },
    experienceYears: { type: Number, required: true, min: 0 },
    availability: { type: String, enum: ["weekend", "24/7", "weekdays"], required: true }
}, { timestamps: true })

const technician = mongoose.model("technician", technicianSchema)
module.exports = technician