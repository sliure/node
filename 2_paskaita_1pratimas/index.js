const express = require("express");
const cors = require("cors");
const app =  express();

app.use(express.json());
app.use(cors());

const port = 3000; 

const cars = ["Citroen"];

app.get("/cars", (req, res) => {//res - duomenys, kuriuos grazinam
    res.send(cars);//res.send metodas kuris grazina klientui atsakyma 
});

app.post("/cars", (req, res) => {
    const car = req.body.name//req.bocy pagrindiniai duomenys is isores
    car.push(names);
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Server is runing on the ${port}`);
});