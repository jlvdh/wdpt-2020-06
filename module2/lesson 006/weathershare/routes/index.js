const express = require('express');
const router  = express.Router();
const Weather = require('../models/Weather')

/* GET home page */
router.get('/', (req, res, next) => {
  Weather.find()
    .then(weatherDocs => {
      res.render('all-weather', {weatherDocs})
    })  // res.redirect('/weather')
});

module.exports = router;
