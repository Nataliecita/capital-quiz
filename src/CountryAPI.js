let country = 'colombia'

const api = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`

export const get = () =>
  fetch(`${api}`, { mode: "cors" })
    .then(res => res.json())
    .then(function(data){
      console.log(data[0].capital)
    })



