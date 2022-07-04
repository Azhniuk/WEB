function searchWeather(response) {  //returns the real weather data
  
  
  console.log(response.data);
  console.log(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = `${Math.round(response.data.main.temp)}°C`;
  document.querySelector("#humidity").innerHTML = `${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `${Math.round(response.data.wind.speed)} km/h`;

  document.querySelector("#description").innerHTML = `${response.data.weather[0].description }`;



  let iconElement = document.querySelector("#icon");
  
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  
}



//iconElement.setAttribute("alt", response.data.weather[0].description);
//getForecast(response.data.coord);   /${response.data.weather[0].icon}
 



// function dateForNow(timeNow){
//   let date = new Date(timeNow);
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let day = date.getDay();
//   return `${day} ${hours}:${minutes}`;
// }


function search(event) { //search the city 
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(searchWeather);
 
}









let apiKey = "9501a68da2d700b9b0fb729939635887";




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





