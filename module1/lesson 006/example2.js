const students = ["Lisette",'Yuka','Anna','Marcella','Kenouly', 'Jorg', 'Mahmut']

// const newStudents = []

// students.forEach(student => {
//   newStudents.push(`student ${student}`)
// })

const newStudents = students.map((student, index) => `student ${index}: ${student}`)

console.log(newStudents)

const numbers = [22,7, 12, 8,9]

const doubledNumbers = numbers.map(num => {
  return  2 * num;
})

// console.log(numbers)

// console.log(doubledNumbers)

const sumOfLuckyNumbers = numbers.reduce((total, currentValue) => {
  console.log(`total: ${total}`)
  console.log(`currentValue: ${currentValue}`)
  if (currentValue % 2 === 0) {
    return total + currentValue
  } else {
    return total
  }
})
// const students = ["Lisette",'Yuka','Anna','Marcella','Kenouly','Mahmut']

const studentsObject = students.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = Math.random() * 10
  return accumulator
}, {})

console.log(studentsObject)

// console.log(sumOfLuckyNumbers)

const evenNumbers = numbers.filter(number => {
  return number % 2 !== 0
})

console.log(evenNumbers)

const actualStudents = students.filter(student => student !== "Jorg")

const studentsWithA = students.filter(student => {
  return student.includes('a')
})

console.log(studentsWithA)

// console.log(actualStudents)