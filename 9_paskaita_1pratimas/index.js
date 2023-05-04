const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config();

const port = process.env.PORT || 8080;
const URI = process.env.DB_CONNECTION_STRING;

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient(URI);

app.get('/books', async (req, res) => {
  try {
    const connect = await client.connect();
    const dataBooks = await connect
      .db('ManoDuomenuBaze')
      .collection('Books')
      .find()
      .toArray();
    await connect.close();
    res.send(dataBooks);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connect = await client.connect();
    const dataOfBookId = await connect
      .db('ManoDuomenuBaze')
      .collection('Books')
      .findOne(new ObjectId(id));
    await connect.close();
    res.send(dataOfBookId);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get('/books/genre/:genreOfBook', async (req, res) => {
  try {
    const { genreOfBook } = req.params;
    const connect = await client.connect();
    const dataOfBook = await connect
      .db('ManoDuomenuBaze')
      .collection('Books')
      .find({ genre: { $regex: new RegExp(genreOfBook, 'i') } })
      .toArray();
    await connect.close();
    res.send(dataOfBook);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get('/books/ratingBooks/:ratingFrom', async (req, res) => {
  try {
    const ratingFrom = req.params.ratingFrom.toLowerCase();
    let sort;
    if (ratingFrom === 'asc') {
      sort = 1;
    } else if (ratingFrom === 'dsc') {
      sort = -1;
    } else {
      res.status(404).send('error');
    }
    const connect = await client.connect();
    const data = await connect
      .db('ManoDuomenuBaze')
      .collection('Books')
      .find()
      .sort({ ratng: sort })
      .toArray();
    await connect.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.post('/books', async (req, res) => {
  try {
    const newBook = req.body;
    const connect = await client.connect();
    const dataOfNewBook = await connect
      .db('ManoDuomenuBaze')
      .collection('Books')
      .insertOne(newBook);
    await connect.close();
    res.send(dataOfNewBook);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
