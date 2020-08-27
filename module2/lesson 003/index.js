const mongoose = require('mongoose')

const Transportation = require('./models/Transportation')

mongoose.connect('mongodb://localhost/holiday')
  .then(connection => {
    console.log('connection initialised')
  })

const Destination = mongoose.model('Destination', { name: String })

const Samoa = new Destination({name: 'Samoa'})

Samoa.save()
  .then(destination => {
    console.log(destination)
  })

const airBalloon = new Transportation({
  name: 'Airballoon',
  budget: 2000,
  duration: 24,
  startingDate: new Date(),
  kidProof: false
})

airBalloon.save()
  .then(transportation => {
    // console.log(transportation)
  })
  .catch(error => {
    console.log(error)
  })

Transportation.find({budget: {$gt: 3000}})
  .then(transportationMethods => {
    console.log(transportationMethods)
  })



Transportation.updateOne({_id: '5f47eceb11769de61f08d406'}, {budget: 10000})
  .then(transportation => {
    return Transportation.findById('5f47eceb11769de61f08d406')
  })
  .then(updatedTransportation => {
    console.log(updatedTransportation)
  })
  .catch(error => {
    console.log(error)
  })

  Transportation.deleteOne({_id: '5f47efef4340a8e6e74a5cce'})
    .then(deleted => {
      console.log(deleted)
    })