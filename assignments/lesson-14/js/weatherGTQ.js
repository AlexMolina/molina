
var apiURLQ = 'https://api.openweathermap.org/data/2.5/weather?id=3590978&units=imperial&APPID=8fbfcecc22f41cf89d4df469b20e735b';
var weatherRequestQ = new XMLHttpRequest();

weatherRequestQ.open('GET', apiURLQ, true);
weatherRequestQ.responseType = 'text';
weatherRequestQ.send();

weatherRequestQ.onload = function() {
  var weatherDataQ  = JSON.parse(weatherRequestQ.responseText);

  document.getElementById('weatherGTQ').innerHTML = weatherDataQ.weather[0].main;
  document.getElementById('temperatureGTQ').innerHTML = weatherDataQ.main.temp;
  document.getElementById('humidityGTQ').innerHTML = weatherDataQ.main.humidity;
  document.getElementById('windGTQ').innerHTML = weatherDataQ.wind.speed;

  console.log(weatherDataQ); 
};