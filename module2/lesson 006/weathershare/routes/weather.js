const express = require('express');
const router  = express.Router();
const Weather = require('../models/Weather')
const Location = require('../models/Location')
/* GET home page */
router.get('/', (req, res, next) => {
  // show all weather documents
  Weather.find()
    .then(weatherDocs => {
      res.render('all-weather', {weatherDocs})
    })
});

router.get('/view/:id', (req, res, next) => {
  const { id } = req.params
  const locations = Location.find()
  const weather = Weather.findById(id).populate('locations')

  Promise.all([locations, weather])
    .then(result => {

      console.log(result[1])
      res.render('weather-details', {weatherDoc: result[1], locations: result[0] })
    })

})

router.get('/add', (req, res, next) => {
  res.render('add-weather')
})

router.post('/add', (req, res, next) => {
  console.log(req.body)
  const {name, windSpeed, rating} = req.body

  Weather.create({
    name,
    windSpeed,
    rating
  })
    .then(weather => {
      res.redirect('/weather')
    })
    .catch(err => {
      next(err)
    })
})

router.get('/edit/:id', (req, res, next) => {
  Weather.findById(req.params.id)
    .then(weather => {
      res.render('edit-weather', weather)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/edit/:id', (req, res, next) => {
  const {name, windSpeed, rating} = req.body
  Weather.findByIdAndUpdate({_id: req.params.id}, {$set: {name, windSpeed, rating}}, {new: true})
    .then(weather => {
      console.log(weather)
     res.redirect('/weather/view/' + req.params.id)

    })
    .catch(err => {
      next(err)
    })
})

router.get('/delete/:id', (req, res, next) => {
  Weather.deleteOne({_id: req.params.id})
    .then(result => {
      res.redirect('/weather')
    })
    .catch(err => {
      next(err)
    })
})

router.post('/message/:id', (req, res, next) => {
  const {title, body} = req.body
  console.log(req.body)
  Weather.findById(req.params.id)
    .then(weather => {
      weather.messages.push({
        title,
        body
      })
      return weather.save()
    })
    .then(() => {
      res.redirect('/weather/view/' + req.params.id)
    })
    .catch(error => {
      next(error)
    })
})

router.post('/location/:id', (req, res, next) => {

  Weather.updateOne({_id: req.params.id}, {$push: {locations: req.body.locationId}})
    .then(() => {
      res.redirect('/weather/view/' + req.params.id)
    })
    .catch(error => {
      next(error)
    })
})


/* GET home page */
router.get('/kitesurf', (req, res, next) => {
  // show all weather documents
  res.send('all kitesurf weather documents')
});

module.exports = router;
