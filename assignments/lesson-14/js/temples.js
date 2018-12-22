var apiURL = "temples.json";
var templeRequest = new XMLHttpRequest();

templeRequest.open('GET', apiURL, true);
templeRequest.responseType = 'text';
templeRequest.send();

templeRequest.onload = function() {
  var templeData  = JSON.parse(templeRequest.responseText);

  console.log(templeData); 
};