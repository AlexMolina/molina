
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4841125&units=imperial&APPID=8fbfcecc22f41cf89d4df469b20e735b';
var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURL, true);
weatherRequest.responseType = 'text';
weatherRequest.send();

weatherRequest.onload = function() {
  var weatherData  = JSON.parse(weatherRequest.responseText);
  document.getElementById("current-temp").innerHTML = weatherData.main.temp;
  document.getElementById("current-description").innerHTML = weatherData.weather[0].description;
  console.log(weatherData.main.temp); 
};