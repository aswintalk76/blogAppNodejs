const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();

//mongodb connection
connectDB();

//rest objecct
const app = express();
const port = process.env.port || 5000;

//create a default route
app.get("/", (req, res) => {
    res.send(`Server is working on ${port}`);
});

//listen
app.listen(port,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode port no ${port}`.bgCyan
    .white);
})