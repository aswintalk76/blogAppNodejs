const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

//env config
dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const planRoutes = require("./routes/planRoutes");

//mongodb connection
connectDB();

//rest objecct
const app = express();
const port = process.env.port || 5000;

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/plan", planRoutes);

//create a default route
app.get("/", (req, res) => {
    res.send(`Server is working on ${port}`);
});

//listen
app.listen(port,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode port no ${port}`.bgCyan
    .white);
})