// Dynamically typed

let name = 'Jorg'

console.log(typeof name)

name = 5
console.log(typeof name)

let num = 1e9; // == 1000000000

let num2 = 1e-4 // == 0.0001

// Math

let anotherNumber = 3.5564567

console.log(Math.round(anotherNumber * 10) / 10)

console.log(Math.round(anotherNumber))

console.log(anotherNumber.toFixed(3))

let fee = 100 / 3;

console.log(typeof fee.toFixed(2))

let someData = "4"
let otherData = "6"

console.log(typeof Number(someData))

console.log(Number(someData) + Number(otherData))

let otherNum = 0.2 + 0.1

console.log(otherNum.toFixed(2))

console.log(Math.random().toFixed(2))

console.log(Math.round(Math.random() * 100))

let randNum = Math.random() * 100
let roundedRandNum = Math.round(randNum)

let boo = 30;

if (boo !== 50) {
  console.log('boo is higher then 50')
} else {
  console.log('boo is not higher then 50')
}

if(1 == "1") {
  console.log('its true')
}

switch (boo) {
  case 15:
    console.log("it's 15");
    break;
  case 30:
    console.log("it's 30");
  case 60:
    console.log("it's 60");
    break;
}

for (let i = 0; i < 20; i++) {
  console.log(`the number is ${i}`)
  console.log("the number is " + i)
}

let i = 0;
let coffeeMachineLevel = 100

while (coffeeMachineLevel === 0) {
  console.log("please fill the coffee machine")
  const coffeeMachineLevel = checkLevel()
}


