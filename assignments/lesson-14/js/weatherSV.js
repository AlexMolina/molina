
var apiURLSV = 'https://api.openweathermap.org/data/2.5/weather?id=3583360&units=imperial&APPID=8fbfcecc22f41cf89d4df469b20e735b';
var weatherRequestSV = new XMLHttpRequest();

weatherRequestSV.open('GET', apiURLSV, true);
weatherRequestSV.responseType = 'text';
weatherRequestSV.send();

weatherRequestSV.onload = function() {
  var weatherDataSV  = JSON.parse(weatherRequestSV.responseText);

  document.getElementById('weatherSV').innerHTML = weatherDataSV.weather[0].main;
  document.getElementById('temperatureSV').innerHTML = weatherDataSV.main.temp;
  document.getElementById('humiditySV').innerHTML = weatherDataSV.main.humidity;
  document.getElementById('windSV').innerHTML = weatherDataSV.wind.speed;

  console.log(weatherDataSV); 
};