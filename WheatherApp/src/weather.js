
function searchWeather(response) {  //🟥returns the weather data
  console.log(response);

  celsiusTemp = response.data.main.temp;
  
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = `${Math.round(celsiusTemp)}`;
  document.querySelector("#humidity").innerHTML = `${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `${Math.round(response.data.wind.speed)} km/h`;

  document.querySelector("#description").innerHTML = `${response.data.weather[0].description }`;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  iconElement.setAttribute(
    "alt",
    response.data.weather[0].description);

    getWeekForecast(response.data.coord);
  }







  


function search(event) { //search the city 
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  console.log(apiUrl);
  axios.get(apiUrl).then(searchWeather);
 
}



function showFahrenheit(event){ //display C in F
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32 ; 
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);

  celsiusLink.classList.remove("active"); //remove the link
  fahrenheitLink.classList.add("active"); //add the link 

}



function showCelsius(event){ //display F in c
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemp);

  fahrenheitLink.classList.remove("active"); //remove the link
  celsiusLink.classList.add("active"); //add the link

}



function showWeekForecast(response){    //forecast for a week

  let forecast = response.data.daily;

  let weekElement = document.querySelector("#week-forecast");
  let weekHTML = `<div class = "row">`;

  forecast.forEach(function(forecastDay, index){
    if (index<6){
    weekHTML = weekHTML + `
    <div class = "col-2">
      <div class = "week-date">
          ${formatDay(forecastDay.dt)}
      </div>
        
        <image 
                  src = "http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
                  id =""
                  alt = ""
                  
                  class = ""
                  width = "42"
                  />
        <div class = "week-temp">
          <span class = "week-temp-min">${Math.round(forecastDay.temp.min)}° </span>
          <span class = "week-temp-max">${Math.round(forecastDay.temp.max)}°</span>
        </div>

      </div>`
    }});


    weekHTML = weekHTML +`</div>`;
    weekElement.innerHTML = weekHTML;
  }


  function getWeekForecast (coordinates){
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeekForecast);
    }


  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    return days[day];
  }













let apiKey = "9501a68da2d700b9b0fb729939635887";

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsius);



let form = document.querySelector("#search-form");  //search form
form.addEventListener("submit", search);



let cityName = document.querySelector("#city");
let dateNow = document.querySelector("#date");
let dayNow = document.querySelector("#day");
let currentTime = new Date();

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let dayNum = currentTime.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];


dateNow.innerHTML = `${days[dayNum]}  ${hours}:${minutes}`;



let celsiusTemp = null;






