// require("dotenv").config()
// const mongoose = require("mongoose")
// const rolePermissions = require("../../src/modules/admin/rolePermissions/rolePermissions.model.js")
// const connectDB = require("../../src/config/db.js")

// async function seedAdminRole() {
//     try {
//         await connectDB();

//         const role = await rolePermissions.findOne({
//             name: "Super Admin",
//             isDeleted: false,
//         }).collation({ locale: "en", strength: 2 });

//         if (role) {
//             console.log("Super Admin role already exists.");
//             return;
//         }

//         const superAdminRole = await rolePermissions.create({
//             name: "Super Admin",
//             permissions: [],
//             isDeleted: false,
//         });

//         console.log("Super Admin role created:", superAdminRole._id);
//     } catch (error) {
//         console.error("Failed to seed role:", error);
//         process.exitCode = 1;
//     } finally {
//         await mongoose.disconnect();
//     }
// }

// seedAdminRole();