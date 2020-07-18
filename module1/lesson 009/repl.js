'use strict'

hoisting
console.log(myName)

let myName = 'Jorg'

console.log(greeter)

const greeter = function () {
  console.log('hello')
}

let greeting = "hallo"

const greeter = function () {

  let greeting = 'gutentag'

  greeting = 'bonjour'
  console.log('1. ' + greeting)
}

greeter()

console.log('2. ' + greeting)



if(true) {
  greeting = 'hello'
}

console.log(greeting)

console.log('hello')

setTimeout(function() {
  console.log('timeout done')
}, 1000)

const something = true
if(something) {
  console.log('its true')
}

function makeTea(serveFunction) {
  console.log('making tea')
  setTimeout(function() {
    console.log('tea is made')
    serveFunction()
  }, 3000)
}

function serveTea() {

  setTimeout(function() {
    console.log('serving tea')
  }, 2000)
}

makeTea(serveTea)

console.log('we love tea')

makeTea(function() {
  console.log('throw out tea again')
})

