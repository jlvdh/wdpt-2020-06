
const express = require('express')
const router = express.Router()
const Cat = require('../models/cat')
const checkLogin = require('../middleware/checkLogin')

router.get('/', checkLogin, (req, res, next) => {

  Cat.find({
    owner: req.session.user._id
  })
  .then(cat => {
    res.render('cat-list', {cat})
  })
  .catch(err => {
      next(err)
  })  
  
})

router.get('/add', 
checkLogin, 
(req, res, next) => {
    res.render('cat')
})

router.post('/add', checkLogin, (req, res, next) => {

  const {name, furColor} = req.body
    Cat.create({
      name,
      furColor,
      owner: req.session.user._id
    })
    .then(() => {
      res.redirect('/cat')
    })
    .then(err => {
      next(err)
    })
})

module.exports = router