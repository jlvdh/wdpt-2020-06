const cocktailDiv = document.getElementById('cocktails')
const addCocktail = document.getElementById('add-cocktail')

axios.get('http://localhost:3000/cocktails')
  .then(response => {
    console.log(response.data)
    response.data.forEach((cocktail) => {
      const displayCocktail = document.createElement('div')
      displayCocktail.innerHTML = cocktail.name
      cocktailDiv.appendChild(displayCocktail)
    })

  })
  .catch(err => {
    console.log(err)
  })

  addCocktail.addEventListener('click', function(e) {
    e.preventDefault()
    const name = document.getElementById('name').value
    const ingredients = document.getElementById('name').value

    axios.post('http://localhost:3000/cocktails', {
      name,
      ingredients
    })
    .then(result => {
      console.log(result)
    })

  })

// axios.delete('http://localhost:3000/cocktails/1')