console.log("weather.js loaded");
document.addEventListener("DOMContentLoaded", function() {
  let fetchButton = document.querySelector("#fetch-weather-btn");
  let weatherContainer = document.querySelector("#weather-container");
  let tipContainer = document.querySelector("#tip-container");
  let weatherCity = document.querySelector("#weather-city");
  let weatherDescription = document.querySelector("#weather-description");
  let weatherTemp = document.querySelector("#weather-temp");
  let weatherFeels = document.querySelector("#weather-feels");
  let weatherHumidity = document.querySelector("#weather-humidity");
  let weatherWind = document.querySelector("#weather-wind");
  let weatherTip = document.querySelector("#weather-tip");
  fetchButton.addEventListener("click", async function() {
    let apiKey = "caf8ea1e32ecc53d44295709fae8a501";
    let city = "Jackson,MS,US";
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    let response = await fetch(endpoint);
    let data = await response.json();
    console.log(data);
    let cityName = data.name;
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let feelsLike = data.main.feels_like;
    let humidity = data.main.humidity;
    let windSpeed = data.wind.speed;
    weatherCity.textContent = cityName + " Weather";
    weatherDescription.textContent = description;
    weatherTemp.textContent = Math.round(temp) + "°F";
    weatherFeels.textContent = Math.round(feelsLike) + "°F";
    weatherHumidity.textContent = humidity + "%";
    weatherWind.textContent = Math.round(windSpeed) + " mph";
    weatherContainer.style.display = "block";
    let tip = "";
   
  }


