const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

const products = [];

app.get("/cart", (req, res) => {
    res.send([products]);
});

app.post("/cart", (req, res) => {
    const product =  req.body;
    products.push(product);
    res.send(product);
});


app.get("/cart/item/:id", (req, res) => {
    const findId = products.find(product => product.id === Number(req.params.id));
    const productName = findId ? findId.name : "Product not found"
    res.send(productName);
});

app.post("cart/item", (req, res) => {
    const product =  req.body;
    products.push(product);
    res.send(product);
});

app.listen(port, () => console.log(`Server started on port ${port}...`));