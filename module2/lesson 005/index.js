const express = require('express')

const app = express()

const hbs = require('hbs')

const bodyParser = require('body-parser')

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

// const Profile = require('./models/profile')

app.use(bodyParser.urlencoded())

app.get('/', (req, res, next) => {
  res.send('hello world')
})

app.get('/profile/:id/:post', (req, res, next) => {
  console.log(req.params)

  // Profile.find({_id: req.params.id})
  //   .then(profile => {

  //     res.render('profilepage', profile)
  //   })
})

app.get('/search', (req, res, next) => {
  console.log(req.query)
})

app.get('/form', (req, res, next) => {
  // console.log(req.query)
  res.render('form')
})

app.post('/formaction', (req, res, next) => {

  console.log(req.body)

  
  res.send('form send')
})

app.listen(3000, () => {
  console.log('app is listening on port 3000')
})