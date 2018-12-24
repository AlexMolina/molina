
var apiURLGT = 'https://api.openweathermap.org/data/2.5/weather?id=3595530&units=imperial&APPID=8fbfcecc22f41cf89d4df469b20e735b';
var weatherRequestGT = new XMLHttpRequest();

weatherRequestGT.open('GET', apiURLGT, true);
weatherRequestGT.responseType = 'text';
weatherRequestGT.send();

weatherRequestGT.onload = function() {
  var weatherDataGT  = JSON.parse(weatherRequestGT.responseText);

  document.getElementById('weatherGT').innerHTML = weatherDataGT.weather[0].main;
  document.getElementById('temperatureGT').innerHTML = weatherDataGT.main.temp;
  document.getElementById('humidityGT').innerHTML = weatherDataGT.main.humidity;
  document.getElementById('windGT').innerHTML = weatherDataGT.wind.speed;

  console.log(weatherDataGT); 
};