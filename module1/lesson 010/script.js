console.log('script loaded')

const list = document.getElementById('list')

const listItems = document.getElementsByClassName('list-item')

// wont work
// listItems.forEach(element => {
//   console.log(element)
// });

for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i])
  listItems[i].innerHTML = i
}

const items = document.querySelectorAll('li:nth-child(even)')

console.log(items)
// console.log(listItems)

// const listItemsArr = [...listItems]

// listItemsArr.forEach(item => console.log(item))

// console.log(listItemsArr)
// console.log(list.innerHTML)

// const scoreButton = document.getElementById('score-button')

// scoreButton.addEventListener('click', () => {
//   const scoreDiv = document.getElementById('score')
//   const score = Number(scoreDiv.innerHTML)
//   scoreDiv.innerHTML = score + 1

//   console.log('button click')

//   scoreButton.className = 'clicked'
//   // scoreButton.id = 'anotherId'
// })

const addButton = document.getElementById('add-button')
const container = document.getElementsByClassName('container')[0]


addButton.addEventListener('click', () => {
  const img = document.createElement('img')
  img.setAttribute('src', 'http://placekitten.com/100/100')

  container.appendChild(img)
  console.log(container)
  console.log(img)
})

container.addEventListener('click', (event) => {
  console.log(event)
  const cat = event.target
  cat.className = 'clickedCat'
  cat.remove()
})