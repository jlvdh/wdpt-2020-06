// easyGoing()
// // sayHi()
// greeter('Anna')

function easyGoing() {
  console.log("You are very easy going")
}

const sayHi = function() {
  console.log('hi')
}

const greeter = (name) => {
  console.log(`Hi ${name}`);
}

const array = ['123', 123, 'text']

// const forEachFunction = function (item) {
//   console.log(item);
// }
// array.forEach(forEachFunction)


array.forEach(function (item) {
  console.log(item);
})

array.forEach( item => console.log(item))

function makeBeer(callback) {
  console.log('beer is made')
  callback('beer')
}

function makeCookies(callback) {
  console.log('cookies are baked')
  callback('cookies')
}

function makeCoffee(callback) {
  console.log('coffee is made')
  callback('coffee', 'espresso')
}

function serve (product) {
  console.log(`serving ${product}`)
  console.log('serving ' + product)

}

makeBeer(serve)

makeCookies(serve)

makeCoffee(function(product, type) {
  console.log('we got some nice ' + product + ' its a nice ' + type)
  console.log(`we got some nice ${product} its a nice ${type}`)
})
