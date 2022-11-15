// Lucas' API Key
const APIKEY = 'c0886e7f9b97671cd7d8181d43f8adec';
// City
const city = 'Cheney';
// Units for Farenheit
const units = 'imperial';

const humidity = 'humidity';

const wind = 'wind';

const feelsLike = 'feelsLike';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}&${humidity}&${wind}&${feelsLike}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  console.log( data );
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  
  // Template to output
  const template = `
    <h1>🌡️Weather</h1>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Placeholder">
    <data value="${data.name}" class="city">${data.name}</data>
    <data value="${data.main.temp}" class="temp">${data.main.temp}&#8457;</data>
    Humidity: <data value="${data.main.humidity}" class="humidity">${data.main.humidity}%</data>
    Wind: <data value="${data.wind.speed}" class="wind">${data.wind.speed} mph</data>
    Feels Like: <data value="${data.main.feels_like}" class="feelsLike">${data.main.feels_like}&#8457;</data>
  `;
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
});
