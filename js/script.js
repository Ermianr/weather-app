const weatherContainer = document.querySelector('#weather-container')
const locationName = document.querySelector('#location-name')
const temp = document.querySelector('#temp')
const searchBar = document.querySelector('#search-bar')

searchBar.addEventListener('keyup', (e) => {
  const input = e.target.value
  if (e.key === 'Enter') {
    getData(input)
  }
})

getData()

async function getData(location = 'cali') {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=90a2b6adf8ebe4da65ccbcc7c6f05653&&units=metric`
  try {
    const response = await fetch(url)
    const result = await response.json()
    locationName.textContent = result.sys.country + " " + result.name
    temp.textContent = Math.round(result.main.temp) + " " + "°" + result.weather[0].description
  } catch (error) {
    console.log(error)
  }
}