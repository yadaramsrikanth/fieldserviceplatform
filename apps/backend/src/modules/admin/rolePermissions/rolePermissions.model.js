const mongoose = require("mongoose")

const rolePermissionSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    permissions: { type: [String], default: [] },
    isDeleted: { type: Boolean, default: false },


}, { timestamps: true })

rolePermissionSchema.index({ name: 1 },
    {
        unique: true,
        collation: { locale: "en", strength: 2 },
        partialFilterExpression: { isDeleted: false },
    }
)

const rolePermissions = mongoose.model("rolePermission", rolePermissionSchema)
module.exports = rolePermissions