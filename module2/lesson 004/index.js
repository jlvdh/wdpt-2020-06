const express = require('express');
const app = express();
const hbs = require('hbs')

// const Cat = require('./models/cat.js')
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))
app.get('/', (req, res, next) => {
  // Cat.find()
  //   .then(cats => {
  //     res.render('cats', cats)
  //   })
    const catObject = {
      name: 'mr. Wiggles',
      age: 16,
      food: 'Sardines',
      hungry: true,
      title: 'CATS',
      clothing: [
        {
          name: 'tophat',
          color: 'black'
        },
        { 
            name: 'bowtie',
            color: 'red'
        },
        {   name:'boots',
            color:'brown'
        }
      ]
    }

    console.log(req.url);
    res.render('cat', catObject)
  });

  app.get('/dog', (req, res, next) => {
    res.render('dog', {title: 'dogs', food: 'doggybisquit'})
  })


  app.get('/kanye', (req, res, next) => {
    const quotes = [
      'quote 1',
      'quote 2',
      'quote 3',
      'quote 4'
    ]

    const rand = Math.floor(Math.random() * 5)

    const quote = {
      quote: quotes[rand]
    }

    res.json(quote)
  })
app.listen(3000, () => {
    console.log('server is listening at port 3000')
})