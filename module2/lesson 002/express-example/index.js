const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/jorg', (req, res, next) => {

  console.log(req.url)
  // res.send('<h1>this is Jorg\'s page</h1>')

  res.sendFile(`${__dirname}/views/jorg.html`)
})

app.listen(3000, () => {
  console.log('server is listening at port 3000')
})