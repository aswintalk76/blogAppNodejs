const express = require("express");
const app = express();
const port = process.env.port || 5000;

//create a default route
app.get("/", (req, res) => {
    res.send(`Server is working on ${port}`);
});

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})