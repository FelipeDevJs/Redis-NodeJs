const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const Redis = require('ioredis')
const redis = new Redis()

const db = require('./config/db')
const Car = require('./model/Car')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

redis.set('name', 'John')

app.get('/', (req, res) => {
    redis.get('name', (err, result) => {
        if(err){
            console.error(err)
        }else{
            console.log(result)
            res.send(result)
        }
    })
})

app.post('/newcar', async (req, res) => {
    const {brand, year} = req.body

    const car = await Car.create({
        brand,
        year
    })
    res.json(car)
    console.log(car.brand, car.year)
})

app.get('/cars', async (req, res) => {
    const cars = await Car.find()
    res.json(cars)
})

app.listen(PORT, () => {
  console.log('Server na porta ' + PORT)
})