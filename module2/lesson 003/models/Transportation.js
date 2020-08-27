const mongoose = require('mongoose')

const Schema = mongoose.Schema

const transportationSchema = new Schema({
  name: {
    type: String,
    required: true,
    // set: name => `transportation ${name}`
  },
  budget: {
    type: Number,
    min: 1000
  },
  duration: Number,
  startingDate: Date,
  kidProof: Boolean
})

const Transportation = mongoose.model('Transportation', transportationSchema)

module.exports = Transportation