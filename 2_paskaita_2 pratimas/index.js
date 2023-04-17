const express = require("express");
const cors = require("cors");
const app =  express();

app.use(express.json());
app.use(cors());

const port = 3000; 

const product = [];

app.get("/products", (req, res) => {
    res.send(product);
});

app.post("/products", (req, res) => {
    const products = req.body.product
    product.push(products);
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Server is runing on the ${port}`);
});