const chalk = require('chalk')
const http = require('http')

console.log(chalk.blue('starting node.js app with nodemon'))

const server = http.createServer((req, res) => {
  console.log(req.url)
  if(req.url === '/jorg') {
    res.write('this is Jorg\'s page')
    res.end()
  } else {
    res.write('this page doesn\'t exist')
    res.end()
  }

})

server.listen(2000)



