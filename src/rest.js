export default () => (
  fetch('https://api.exchangeratesapi.io/latest?base=RUB')
    .then(response => response.json())
    .catch((error) => {
      console.log(`There has been a problem with your fetch operation: ${error.message}`)
    })
)
