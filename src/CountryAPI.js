const api = `https://restcountries.eu/rest/v2`

// contact api and grab capital, allowing CORS
export const getCountryCapital = (country) =>
  fetch(`${api}/name/${country}?fullText=true`, { mode: "cors" })
    .then(res => res.json())
    .then(function(data){
      console.log(data[0].capital)
    })

// Grab random country from all countries array 
export const getRandomCountry = (randomNum) =>
  fetch(`${api}/all`, {mode: "cors"})
    .then(res => res.json())
    .then(function(data){
      // countries = data
      // console.log(countries)
      console.log(data[randomNum])
      return data[randomNum]
    })
