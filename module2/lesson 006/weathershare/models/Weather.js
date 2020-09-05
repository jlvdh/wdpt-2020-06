const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
  title: String,
  body: String
})

const weatherSchema = new Schema({
  name: {type: String, unique: true},
  windSpeed: Number,
  rating: Number,
  locations: [{type: Schema.Types.ObjectId, ref: 'Location'}],
  messages: [messageSchema]
})

const Weather = mongoose.model('Weather', weatherSchema)

module.exports = Weather
