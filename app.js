const express = require("express");
const app = express();
const router = require("./routes/taskRoutes");
require('dotenv').config()
const port = process.env.PORT || 8080;
const mongoose = require("mongoose")

app.use("/api/v1/", router);
app.use(express.static("./public"));

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}).then(()=>{
    console.log("Database connected...")
    app.listen(port, console.log("Server is running on port", port));

}).catch(error=>console.log(error))
