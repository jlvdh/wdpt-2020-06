const mongoose = require('mongoose')

const Schema = mongoose.Schema

const weatherSchema = new Schema({
  name: String,
  windSpeed: Number,
  rating: Number
})

const Weather = mongoose.model('Weather', weatherSchema)

module.exports = Weather
