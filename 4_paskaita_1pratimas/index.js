const express = require("express");
const cors = require("cors");
const data = require("./data")
const port = 3000;


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(data)
})

app.get("/cars/:model", (req, res) => {
    const model = req.params.model;
    const filteredClients = data.filter(client => client.car.toLowerCase() === model.toLowerCase());
    res.send(filteredClients)
})

app.get("/clients/:id", (req, res) => {
    const id =  req.params.id;
    const foundClient = data.find(client => client.id === Number(id));
    res.send(foundClient)
})

app.get("/emails", (req, res) => {
    const emails = data.map((client) => client.email);
    res.send(emails)
})

app.get("/females", (req, res) => {
    const females = data.filter(client => client.gender === 'Female');
    const fullnames = females.map(female => `${female.first_name} ${female.last_name}`)
    res.send(fullnames)
})


app.listen(port, () => console.log(`Server started on port ${port}...`));