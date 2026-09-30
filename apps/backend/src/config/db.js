const mongoose = require("mongoose")
const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])
//connecting mongodb database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected Successfully")
    } catch (error) {
        console.error("Failed to connect database", error.message)
        process.exit(1)
    }
}
module.exports = connectDB