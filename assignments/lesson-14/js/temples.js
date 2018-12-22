var apiURL = "temples.json";
var templeRequest = new XMLHttpRequest();

templeRequest.open('GET', apiURL, true);
templeRequest.responseType = 'text';
templeRequest.send();

templeRequest.onload = function() {
  var templeData  = JSON.parse(templeRequest.responseText);

  document.getElementById("gt-temple").innerHTML = templeData.temples[0].address;  
  
  document.getElementById("gtq-temple").innerHTML = templeData.temples[1].address;  

  console.log(templeData); 
};