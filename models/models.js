const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Name cannot be blank"],
        maxlenth:[20, "Name can not be more than 20 characters"],
        trim:true
    },
    completed: {
        type:Boolean,
        default: false
    }
}) 
module.exports = mongoose.model("task",taskModel)