const express = require("express");
const cors = require("cors");
const data = require("./data")
const port = 3000;


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(data);
})

app.get("/thing/:category", (req, res) => {
    const category = req.params.category;
    const filterCategory = data.filter(thing => thing.category.toLowerCase() === category.toLowerCase());
    res.send(filterCategory);
})

app.get("/tech/:id", (req, res) => {
    const id = req.params.id;
    const filterById = data.find(thing => thing.id === Number(id));
    res.send(filterById);
})

app.get("/category", (req, res) => {
    const category = data.map((category) => category.category)
    res.send(category);
})

app.get("/category", (req, res) => {
    const category = data.map((category) => category.category)
    res.send(category);
})

app.get("/stock", (req, res) => {
    const stock = data.filter(stock => stock.stock <= 5)
    res.send(stock);
})

//
app.get("/prices/:minPrice/:maxPrice", (req, res) => {
    const minPrice = Number(req.params.minPrice);
    const maxPrice = Number(req.params.maxPrice);
    const filterByPrice = data.filter(item => item.price >= minPrice && item.price <= maxPrice);
    res.send(filterByPrice);
})

app.post("/add", (req, res) => {
    const newProduct = req.body;
    product.push(products);
    res.send(products);
})

app.listen(port, () => console.log(`Server started on port ${port}...`));