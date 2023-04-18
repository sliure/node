const express = require("express");
const cors = require("cors");
const app =  express();

app.use(express.json());
app.use(cors());

const port = 3000; 

const form = [];

app.get("/form", (req, res) => {
    res.send(form);
});

app.post("/form", (req, res) => {
    const forms = {password: req.body.password, repeatPassword: req.body.repeatPassword, name: req.body.name, surname: req.body.surname, email: req.body.email, postcode: req.body.post, city: req.body.city, phonenumber: req.body.number}
    form.push(forms);
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Server is runing on the ${port}`);
});