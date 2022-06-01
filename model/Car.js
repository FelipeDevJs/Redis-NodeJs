const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    brand: String,
    year: Number
})

module.exports = mongoose.model('Car', CarSchema)