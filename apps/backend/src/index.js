require("dotenv").config()
const app = require("./app")
const connectDB = require("./config/db")
const PORT = process.env.PORT || 300

const startServer = async () => {
    try {
        //connecting to mongodb
        await connectDB()

        //starting server
        app.listen(PORT, () => {
            console.log(`Server Running on ${PORT}`)
        })
    } catch (error) {
        console.log("Server set up Failed", error.message)
        process.exit(1)
    }
}
startServer()