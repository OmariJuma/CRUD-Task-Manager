const express = require("express");
const app = express();
const router = require("./routes/taskRoutes");
require('dotenv').config()
const port = process.env.PORT || 8080;
const mongoose = require("mongoose")
const notFound = require("./middlewares/not-found")
const errorHandler = require("./middlewares/errorHandler")

app.use(express.static("./public"));
app.use(express.json())

app.use("/api/v1/", router);

app.use(notFound)
app.use(errorHandler)

mongoose.connect(process.env.MONGO_URI || process.env.MONGO_URI_OFFLINE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}).then(()=>{
    console.log("Database connected...")
    app.listen(port, console.log("Server is running on port", port));

}).catch(error=>console.log(error))
