const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        
    },
    confirm_password: {
        type: String,
        required: true,

    },
    dob: {
        type: Date,
        required: true,

    },
    contact: {
        type: Number,
        required: true,
        unique: true
    },
    add: {
        type: String,
        required: true,

    }
});
const users = new mongoose.model("users",userSchema);  //users--> collection name hai (means table name)

module.exports = users;