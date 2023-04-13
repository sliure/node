const express = require("express");
const casual = require("casual");
const app = express();
const port = 4000;

app.get("/randomUser", (req, res) => {
    const randomHuman = `${casual.first_name} ${casual.last_name} ${casual.country} ${casual.city} ${casual.street} ${casual.zip(from = 1, to = 8)} `;
    res.send(randomHuman);
})

app.get("/randomColor", (req, res) => {
    res.send(casual.color_name);  
})

app.get("/randomColors", (req, res) => {
    const colors = [`${casual.color_name}, ${casual.color_name}, ${casual.color_name}, ${casual.color_name}, ${casual.color_name}`];
    res.send(colors);  
})


app.get("/randomPlaces", (req, res) => {
    const randomObject = [
        {
            country: `${casual.country}`,
            city: `${casual.city}`,
            address: `${casual.address}`
        },
        {
            country: `${casual.country}`,
            city: `${casual.city}`,
            address: `${casual.address}`
        },
        {
            country: `${casual.country}`,
            city: `${casual.city}`,
            address: `${casual.address}`
        },
        {
            country: `${casual.country}`,
            city: `${casual.city}`,
            address: `${casual.address}`
        },
        {
            country: `${casual.country}`,
            city: `${casual.city}`,
            address: `${casual.address}`
        }
    ];

    const randomPlaces = [];
    const numPlaces = 5;

    for (let i = 0; i < numPlaces; i++) {
        const randomIndex = Math.floor(Math.random() * randomObject.length);
        const randomPlace = randomObject[randomIndex];
        randomPlaces.push(randomPlace);
    }

    res.send(randomPlaces);
});


app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})