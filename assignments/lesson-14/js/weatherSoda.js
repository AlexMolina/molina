
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Soda Springs&units=imperial&APPID=8fbfcecc22f41cf89d4df469b20e735b';
var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURL, true);
weatherRequest.responseType = 'text';
weatherRequest.send();

weatherRequest.onload = function() {
  var weatherData  = JSON.parse(weatherRequest.responseText);

  document.getElementById('weather').innerHTML = weatherData.weather[0].main;
  document.getElementById('temperature').innerHTML = weatherData.main.temp;
  document.getElementById('humidity').innerHTML = weatherData.main.humidity;
  document.getElementById('wind').innerHTML = weatherData.wind.speed;

  console.log(weatherData); 
};