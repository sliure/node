const express = require("express");
const cors = require("cors");
const port = 3000;

// 1. Terminale pasirašome npm install nodemon

// 2. prisidedame į package.json failą scripts skiltį naują skriptą "dev": "nodemon index.js"

// 3. leidžiama aplikaciją terminale su komanda "npm run dev", run reikalingas, nes komanda sukurta mūsų, o ne sistemiška

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

app.get("/", (req, res) => {
    res.send([users]);
});

app.post("/", (req, res) => {
// pasirenku POST iš sąrašo
// spaudžiam "Body" skiltį
// renkames "raw", bei pasirenkam JSON iš Text (mėlynas textas)
// JSON formatas:
// {
//     "id": 2,
//     "name": "Tomas"
// }
    const user = req.body;
    users.push(user);
    res.send(user);
});

app.listen(port, () => console.log(`Server started on port ${port}...`));