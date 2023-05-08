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

app.get('/users', async (req, res) => {
  try {
    const connect = await client.connect();
    const usersData = await connect
      .db('ManoDuomenuBaze')
      .collection('Users')
      .find()
      .toArray();
    await connect.close();
    res.send(usersData);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/users/usersCount', async (req, res) => {
  try {
    const connect = await client.connect();
    const usersDataCount = await connect
      .db('ManoDuomenuBaze')
      .collection('Users')
      .countDocuments();
    await connect.close();
    res.send({ count: usersDataCount });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/users/name', async (req, res) => {
  try {
    const connect = await client.connect();
    const usersDataCount = await connect
      .db('ManoDuomenuBaze')
      .collection('Users')
      .countDocuments({ name: 'Mohammed Ali' });
    await connect.close();
    res.send({ count: usersDataCount });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/users/city', async (req, res) => {
  try {
    const connect = await client.connect();
    const usersDataUnique = await connect
      .db('ManoDuomenuBaze')
      .collection('Users')
      .distinct('city');
    await connect.close();
    res.send(usersDataUnique);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/users/lowestIncome', async (req, res) => {
  try {
    const connect = await client.connect();
    const usersDataLow = await connect
      .db('ManoDuomenuBaze')
      .collection('Users')
      .aggregate([
        { $group: { _id: '$name', income: { $sum: '$income' } } },
        { $sort: { income: -1 } },
      ])
      .toArray();
    await connect.close();
    res.send(usersDataLow);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/users/highestIncome', async (req, res) => {
  try {
    const connect = await client.connect();
    const usersDataHigh = await connect
      .db('ManoDuomenuBaze')
      .collection('Users')
      .aggregate([
        { $group: { _id: '$name', income: { $sum: '$income' } } },
        { $sort: { income: 1 } },
      ])
      .toArray();
    await connect.close();
    res.send(usersDataHigh);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/users/names/:fullName', async (req, res) => {
  try {
    const fullName = req.params.fullName;
    const connect = await client.connect();
    const usersData = await connect
      .db('ManoDuomenuBaze')
      .collection('Users')
      .find({ name: { $regex: new RegExp(fullName, 'i') } })
      .toArray();
    await connect.close();
    res.send(usersData);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/users', async (req, res) => {
  try {
    const connect = await client.connect();
    const usersDataPost = await connect
      .db('ManoDuomenuBaze')
      .collection('Users')
      .insertMany([
        {
          name: 'James Smith',
          email: 'james.smith@example.com',
          city: 'London',
          income: 6500,
        },
        {
          name: 'Maria Garcia',
          email: 'maria.garcia@example.com',
          city: 'Madrid',
          income: 4500,
        },
        {
          name: 'Hiroshi Nakamura',
          email: 'hiroshi.nakamura@example.com',
          city: 'Tokyo',
          income: 8500,
        },
        {
          name: 'Lena Müller',
          email: 'lena.mueller@example.com',
          city: 'Berlin',
          income: 5200,
        },
        {
          name: 'Julia Rodriguez',
          email: 'julia.rodriguez@example.com',
          city: 'Barcelona',
          income: 6100,
        },
        {
          name: 'Andrea Rossi',
          email: 'andrea.rossi@example.com',
          city: 'Milan',
          income: 4800,
        },
        {
          name: 'Ming Chen',
          email: 'ming.chen@example.com',
          city: 'Shanghai',
          income: 7200,
        },
        {
          name: 'Sophie Dupont',
          email: 'sophie.dupont@example.com',
          city: 'Paris',
          income: 5800,
        },
        {
          name: 'Mohammed Ali',
          email: 'mohammed.ali@example.com',
          city: 'Cairo',
          income: 4100,
        },
        {
          name: 'Natalia Petrova',
          email: 'natalia.petrova@example.com',
          city: 'Moscow',
          income: 6900,
        },
      ]);
    await connect.close();
    res.send(usersDataPost);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
