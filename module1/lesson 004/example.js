const fruits = ['apple', 'pear','cherry']

fruits.forEach(fruit => {
  console.log(fruit)
})

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


const cat = {
  name: 'mr wiggles',
  age: 4,
  furColor: 'red'
}

const catKeys = Object.keys(cat)

for (let i = 0; i < catKeys.length; i++) {
  console.log(cat[catKeys[i]])
}

for (let keyName in cat) {
    console.log(cat[keyName])
}

console.log(Object.values(cat))


console.log(`the name of the cat is ${cat.name}`)

console.log(`the name of the cat is ${cat['name']}`)

const lisette = {
  name: 'Lisette',
  favoriteFood: 'Mayonaise with fries'
}

const marcella = {
  name: 'Marcella',
  favoriteFood: 'chocolat'
}

const kenouly = {
  name: 'Kenouly',
  favoriteFood: 'risotto'
}

const yuka = {
  name:'Yuka',
  favoriteFood:'pasta'
}

const anna = {
  name: 'Ann',
  favoriteFood:'sushi'
}

const mahmut = {
  name: 'Mahmut',
  favoriteFood: 'hamburger'
};

const students = [
  lisette,
  yuka,
  kenouly,
  marcella,
  anna,
  mahmut
]


function studentFood (student) {
  return `${student.name} favorite food is: ${student.favoriteFood}`
}

const grid = [[1,23,4], [34,23, 23], [22,2345, 23]]

console.log(grid[1][0])

console.log(students[3].favoriteFood)

console.log(studentFood(yuka))

console.log(studentFood(mahmut))

// studentFoods(students)

console.log(Object.values(cat))

students.forEach(student => {
  console.log(studentFood(student))
})

students.forEach(function(student) {
  console.log(studentFood(student))
})