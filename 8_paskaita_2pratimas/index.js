const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 8080;
const URI = process.env.DB_CONNECTION_STRING;

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient(URI);

app.get('/movies', async (req, res) => {
  try {
    const connect = await client.connect();
    const getData = await connect
      .db('ManoDuomenuBaze')
      .collection('Movies')
      .find()
      .toArray();
    await connect.close();
    res.send(getData);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/movies', async (req, res) => {
  try {
    const restaurant = req.body;
    const connect = await client.connect();
    const getData = await connect
      .db('ManoDuomenuBaze')
      .collection('Movies')
      .insertOne(restaurant);
    await connect.close();
    res.send(getData);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on the ${port} port`);
});
