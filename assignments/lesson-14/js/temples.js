var apiURL = "temples.json";
var templeRequest = new XMLHttpRequest();

templeRequest.open('GET', apiURL, true);
templeRequest.responseType = 'text';
templeRequest.send();

templeRequest.onload = function() {
  var templeData  = JSON.parse(templeRequest.responseText);
  /* Guatemala city temple */    
  document.getElementById("gt-address").innerHTML = templeData.temples[0].address;  
  document.getElementById("gt-telephone").innerHTML = templeData.temples[0].telephone;  
  document.getElementById("gt-services").innerHTML = templeData.temples[0].services;  
  document.getElementById("gt-closureYear0").innerHTML = templeData.temples[0].closures[0].closureYear;  
  document.getElementById("gt-closuresYear0").innerHTML = templeData.temples[0].closures[0].closureDays;  
  document.getElementById("gt-closureYear1").innerHTML = templeData.temples[0].closures[1].closureYear;  
  document.getElementById("gt-closuresYear1").innerHTML = templeData.temples[0].closures[1].closureDays;  

  /* Quetzaltenango Guatemala temple */    
  document.getElementById("gtq-address").innerHTML = templeData.temples[1].address;  
  document.getElementById("gtq-telephone").innerHTML = templeData.temples[1].telephone;  
  document.getElementById("gtq-services").innerHTML = templeData.temples[1].services;  
  document.getElementById("gt-closureYear0").innerHTML = templeData.temples[1].closures[0].closureYear;  
  document.getElementById("gt-closuresYear0").innerHTML = templeData.temples[1].closures[0].closureDays;  
  document.getElementById("gt-closureYear1").innerHTML = templeData.temples[1].closures[1].closureYear;  
  document.getElementById("gt-closuresYear1").innerHTML = templeData.temples[1].closures[1].closureDays;  

    /* San Salvador El Salvador temple */    
    document.getElementById("sv-address").innerHTML = templeData.temples[2].address;  
    document.getElementById("sv-telephone").innerHTML = templeData.temples[2].telephone;  
    document.getElementById("sv-services").innerHTML = templeData.temples[2].services;  
    document.getElementById("sv-closureYear0").innerHTML = templeData.temples[2].closures[0].closureYear;  
    document.getElementById("sv-closuresYear0").innerHTML = templeData.temples[2].closures[0].closureDays;  
  
    /* Tegucigalpa Honduras Temple */    
    document.getElementById("hn-address").innerHTML = templeData.temples[3].address;  
    document.getElementById("hn-telephone").innerHTML = templeData.temples[3].telephone;  
    document.getElementById("hn-services").innerHTML = templeData.temples[3].services;  
    document.getElementById("hn-closureYear0").innerHTML = templeData.temples[3].closures[0].closureYear;  
    document.getElementById("hn-closuresYear0").innerHTML = templeData.temples[3].closures[0].closureDays;  

    console.log(templeData); 
};