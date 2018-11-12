var event = new Date();
var options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

document.getElementById("currentdate").innerHTML = event.toLocaleDateString('en-GB', options);


