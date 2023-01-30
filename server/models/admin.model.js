const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String }
}, { timestamps: true })

const Admin = mongoose.model("admin", AdminSchema)
module.exports = Admin