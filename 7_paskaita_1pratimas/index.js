const express = require('express')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(cors())

const days = []

app.get('/howisyourday', (req, res) => {
  res.send(days)
})

app.post('/howisyourday', (req, res) => {
  const day = req.body
  const newDay = { id: days.length + 1, ...day }
  days.push(newDay)
  res.send(newDay)
})

app.get('/howisyourday/:id', (req, res) => {
  const dayId = +req.params.id
  const foundDayId = days.find((day) => day.id === dayId)
  if (foundDayId) {
    res.send(foundDayId)
  } else {
    res.status(404).send({ message: 'Day is not found' })
  }
})

app.delete('/howisyourday/:id', (req, res) => {
  const dayId = +req.params.id
  const foundDayId = days.findIndex((day) => day.id === dayId)
  if (foundDayId !== -1) {
    const deletingDay = days.find((day) => day.id === dayId)
    days.splice(foundDayId, 1)
    res.send(deletingDay)
  } else {
    res.status(404).send({ message: 'Day is not found' })
  }
})

app.put('/howisyourday/:id', (req, res) => {
  const dayId = +req.params.id
  const foundDayId = days.findIndex((day) => day.id === dayId)
  if (foundDayId !== -1) {
    const day = req.body
    const updatingDay = { dayId, ...day }
    days.splice(foundDayId, 1, updatingDay)
    res.send(updatingDay)
  } else {
    res.status(404).send({ message: 'Day is not found' })
  }
})

app.listen(port, () => console.log(`Server started on port ${port}...`))
