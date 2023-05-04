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

app.get('/products', async (req, res) => {
  try {
    const connect = await client.connect();
    const dataOfProducts = await connect
      .db('ManoDuomenuBaze')
      .collection('Products')
      .find()
      .toArray();
    await connect.close();
    res.send(dataOfProducts);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connect = await client.connect();
    const dataOfProductId = await connect
      .db('ManoDuomenuBaze')
      .collection('Products')
      .findOne(new ObjectId(id));
    await connect.close();
    res.send(dataOfProductId);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get('/products/category/:categoryOfProduct', async (req, res) => {
  try {
    const { categoryOfProduct } = req.params;
    const connect = await client.connect();
    const data = await connect
      .db('ManoDuomenuBaze')
      .collection('Products')
      .find({ category: { $regex: new RegExp(categoryOfProduct, 'i') } })
      .toArray();
    await connect.close();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get('/products/priceSort/:priceFrom', async (req, res) => {
  try {
    const priceFrom = req.params.priceFrom.toLowerCase();
    let sort;
    if (priceFrom === 'asc') {
      sort = 1;
    } else if (priceFrom === 'dsc') {
      sort = -1;
    } else {
      res.status(404).send('error');
    }
    const connect = await client.connect();
    const dataOfPrices = await connect
      .db('ManoDuomenuBaze')
      .collection('Products')
      .find()
      .sort({ ratng: sort })
      .toArray();
    await connect.close();
    res.send(dataOfPrices);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/products', async (req, res) => {
  try {
    const newProduct = req.body;
    const connect = await client.connect();
    const dataOfNewProduct = await connect
      .db('ManoDuomenuBaze')
      .collection('Products')
      .insertOne(newProduct);
    await connect.close();
    res.send(dataOfNewProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
