const list = ['apple', 'pear', 'banana'];

list.push('pineapple')

list.unshift('papaya')

console.log(list)
// list.shift()
// console.log(list)

list[1] = 'pomegranate'
console.log(list)

list.forEach((fruit) => {
  console.log(fruit)
})

for(let i = 0; i < list.length; i++) {
  console.log(list[i])
}

const b = list.splice(0, 2)

b.shift()

console.log(b)

console.log(list)

function makeCoffee(coffeeType) {

  if (coffeeType === undefined) {
    console.log('making random coffee')
  } else {
    console.log(`making ${coffeeType} coffee`)
  }
  // "making " + coffeeType + "coffee"
}

makeCoffee("black")

makeCoffee("espresso")

makeCoffee()

const makeTea = (teaType, quantity, temperature) => {
  return `making ${quantity} amount of ${teaType} tea at C${temperature}`
}

const tea = makeTea("green", 5, 100)

console.log(tea)