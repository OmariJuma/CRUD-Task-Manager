const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({
    name: String,
    completed: Boolean
}) 
module.exports = mongoose.model("task",taskModel)