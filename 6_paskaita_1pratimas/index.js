// 6. Sukur& routes:
// a. GET /&ckets – grąžins visus nupirktus bilietus
// b. POST /&ckets – pridės bilietą
// c. GET /&ckets/:id – grąžins vieną bilietą
// Vieno bilieto formatas {id: 1, row: 5, seat: 24}

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

const tickets = [];

app.get('/tickets', (req, res) => {
  res.send([tickets]);
});

app.post('/tickets', (req, res) => {
  const ticket = req.body;
  tickets.push(ticket);
  res.send(ticket);
});

app.get('/tickets/:id', (req, res) => {
  const findId = tickets.find((ticket) => ticket.id === Number(req.params.id));
  res.send(findId);
});

app.listen(port, () => console.log(`Server started on port ${port}...`));
