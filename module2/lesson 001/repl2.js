let amountOfCoffee = 0

const makeCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

     if(amountOfCoffee <= 0) {
       throw('no more coffee')
     } else {
        console.log('coffee is made')
        resolve('black coffee')
     }
    }, 2000)
  })
}

const addSugar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('adding sugar')
      resolve()
  }, 1000)
  })
}

// makeCoffee()
//   .then((coffeeType) => {
//     console.log(coffeeType)
//     return addSugar()
//     // console.log('makecoffe promise has been resolved')
//   }, (reason) => {
//     console.log(`promise rejected because ${reason}`)
//   })
//   .then(function() {
//     console.log('coffee has suger added')

//     return 12
//   })
//   .then(value => {
//     console.log(value)
//   })
//   .catch(error => {
//     console.log(error)
//   })

// callback hell
  // makecoffee(function () {
  //   addSugar(function() {
  //     serveCoffee(function() {
  //       drinkCoffee(function() {

  //       })
  //     })
  //   })
  // })

async function makingCoffee() {
  try {
   await makeCoffee()
   await addSugar()
  } catch(error) {
    console.log(error)
  }

}

makingCoffee()