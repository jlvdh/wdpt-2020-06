const icecream = {
  flavour: 'Coffee',
  qty: 300,
  color: 'Brown',
  coneType: {
    shape: 'cone',
    substance: 'waffle',
    dressing: 'chocolate'
  }
}

// let flavour = icecream.flavour 
// let qty = icecream.qty;
let color = icecream.color;

const { flavour, qty, color: icecreamColor, coneType: { shape } } = icecream

console.log(`the icecream flavour is ${flavour} the color is: ${icecreamColor}. The cone is shaped ${shape}`)

const pettingZooAnimals = ['Donkey', 'Chicken' ,'lGoat','Pig']

const seaMammals = ['dolphin','whale', 'manatee' ]

// const donkey = pettingZooAnimals[0]
// const chicken = pettingZooAnimals[1]

const [ firstAnimal, , thirdAnimal ] = pettingZooAnimals

console.log(`Lisette petted the following animals today: ${firstAnimal} and ${thirdAnimal}`)

const animals = [...pettingZooAnimals, ...seaMammals]

const seaMammalsCopy = [...seaMammals]

console.log(animals)