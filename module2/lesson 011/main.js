const inputField = document.getElementById('input-text')
const submitButton = document.getElementById('translate-button')
const translatedTextDiv = document.getElementById('translated-text')

submitButton.addEventListener('click', event => {
  event.preventDefault()
  const translateText = inputField.value
  const url = `https://api.funtranslations.com/translate/yoda.json?text=${translateText}`
  axios.get(url)
    .then(response => {
      console.log(response)
      const translatedText = response.data.contents.translated
      translatedTextDiv.innerHTML = translatedText
    })
    .catch(e => {
      console.log(e)
    })
  console.log('button click')
})