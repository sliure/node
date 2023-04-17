const express = require("express");
const cors = require("cors");
const app =  express();

app.use(express.json());
app.use(cors());

const port = 3000; 

const name = ["Kamile"];

app.get("/", (req, res) => {
    res.send(name);
});

app.post("/", (req, res) => {
    const names = req.body.name
    name.push(names);
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Server is runing on the ${port}`);
});