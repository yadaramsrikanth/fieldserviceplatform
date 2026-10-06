
const mongoose = require("mongoose")

const technicianSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    skills: { type: [string], required: true },
    experienceyears: { type: Number, required: true, min: 0 },
    availability: { type: String, enum: ["weekend", "24/7", "weekday"], required: true }
}, { timestamps: true })

const technician = mongoose.model("technician", technicianSchema)
module.exports = technician