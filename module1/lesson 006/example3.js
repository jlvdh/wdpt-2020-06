const students = ["Lisette",'Yuka','Anna','Marcella','Kenouly', 'Jorg', 'Mahmut']

const numbers = [22, 7, 12, 8,9, 2]

// const sortedNumbers = numbers.sort((a, b) => {
//   console.log(`comparing a: ${a} to b: ${b} return value = ${b - a}`)
//   // return a - b
//   return b - a
// })

// console.log(sortedNumbers)

numbers.sort((a, b) => {
  const aEven = a % 2 === 0 
  const bEven = b % 2 === 0

  if (aEven && bEven) {
    return 0
  }

  if (aEven && !bEven) {
    return 1
  }

  if (!aEven && bEven) {
    return -1
  }

})

console.log(numbers)

// students.sort()

// console.log(students)

students.sort((a, b) => {
  if(a === 'Jorg') {
    return -1
  } else {
    return 1
  }
})

console.log(students)