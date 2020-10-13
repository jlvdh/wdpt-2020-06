const fruits = ['Papaya', 'banana', 'pinapple'] 

// ['Papaya is good', 'banana is good', etc.]

const newFruits = []

fruits.forEach(fruit => {
  newFruits.push(`${fruit} is good`)
})

// console.log(newFruits)

// .map()

// const addText = (text) => {
//    return (fruit) => {
//      return `${fruit} ${text}`
//    }
// }

const addText = text => fruit => `${fruit} ${text}`

const addIsGood = addText('is good')

// const addIsGood = (fruit) => {
//   return `${fruit} is good`
// }

const goodFruits = fruits.map(addIsGood)
// const goodFruits = fruits.map(fruit => `${fruit} is nutricious`)
// const goodFruits = fruits.map(fruit => `${fruit} has many vitamins`)

console.log(goodFruits)

// .filter
// 'banana' !== 'banana' false
//  'apple' !== 'banana' true

const fruitFilter = (fruit) => {
  return (compareFruit) => {
    return compareFruit !== fruit
  }
}

const bananaFilter = fruitFilter('banana')
const appleFilter = fruitFilter('apple')

const fruitsButNotBanana = fruits.filter(bananaFilter)
const fruitsButNotApple = fruits.filter(appleFilter)

console.log(fruitsButNotBanana)

// reduce
const num = [1,2,3,4]

const sum = num.reduce((accumulator, current) => accumulator + current);

console.log(sum)

console.log(goodFruits)



