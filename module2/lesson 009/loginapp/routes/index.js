const express = require('express');
const checkLogin = require('../middleware/checkLogin');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/counter', (req, res, next) => {

  console.log(req.session)
  if(req.session.counter) {
    req.session.counter += 1
  } else {
    req.session.counter = 1
  }

  res.send(`counter is at ${req.session.counter}`)
})

router.get('/members', checkLogin, (req, res, next) => {
  res.send('only for loggedin users')
})

module.exports = router;
