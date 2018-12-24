
var apiURLHN = 'https://api.openweathermap.org/data/2.5/weather?id=3608932&units=imperial&APPID=8fbfcecc22f41cf89d4df469b20e735b';
var weatherRequestHN = new XMLHttpRequest();

weatherRequestHN.open('GET', apiURLHN, true);
weatherRequestHN.responseType = 'text';
weatherRequestHN.send();

weatherRequestHN.onload = function() {
  var weatherDataHN  = JSON.parse(weatherRequestHN.responseText);

  document.getElementById('weatherHN').innerHTML = weatherDataHN.weather[0].main;
  document.getElementById('temperatureHN').innerHTML = weatherDataHN.main.temp;
  document.getElementById('humidityHN').innerHTML = weatherDataHN.main.humidity;
  document.getElementById('windHN').innerHTML = weatherDataHN.wind.speed;

  console.log(weatherDataHN); 
};