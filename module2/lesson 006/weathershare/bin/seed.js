const mongoose = require('mongoose')
const Weather = require('../models/Weather')

const weatherDocs = [{
  name: 'nice weather',
  windSpeed: 0,
  rating: 10
}, {
  name: 'hurricane weather',
  windSpeed: 12,
  rating: 1
}, {
  name: 'kitesurf weather',
  windSpeed: 5,
  rating: 7.5
}]


mongoose
  .connect('mongodb://localhost/weathershare', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Weather.insertMany(weatherDocs)
  })
  .then(weatherDocs => {
    console.log(weatherDocs)
    mongoose.disconnect()
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });