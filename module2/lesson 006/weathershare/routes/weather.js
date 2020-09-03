const express = require('express');
const router  = express.Router();
const Weather = require('../models/Weather')
/* GET home page */
router.get('/all', (req, res, next) => {
  // show all weather documents
  Weather.find()
    .then(weatherDocs => {
      res.render('allweather', {weatherDocs})
    })
});

router.get('/details/:id', (req, res, next) => {
  const { id } = req.params

  Weather.findById(id)
    .then(weatherDoc => {
      res.render('weather-details', weatherDoc)
    })

})



/* GET home page */
router.get('/kitesurf', (req, res, next) => {
  // show all weather documents
  res.send('all kitesurf weather documents')
});

module.exports = router;
