// dazniausiai naudojamos aplinkos:
// development, testing, preprod, production

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

// const products = [];

app.get('/', (req, res) => {
  res.send([]);
});

app.listen(port, () => console.log(`Server started on port ${port}...`));
