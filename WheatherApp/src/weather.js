function searchWeather(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
}

function search(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(searchWeather);
}



function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    
  }
}


let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let apiKey = "9501a68da2d700b9b0fb729939635887";

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


dateNow.innerHTML = `${days[dayNum]}: ${hours}:${minutes}`;
