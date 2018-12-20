function windchill() {
    Temp = document.Input.Temperature.value;
    Wind = document.Input.WindSpeed.value;

    if ( document.Input.TempUnits[0].checked ) {
			TempF =  Temp
			Units = '°F';
	} else {
			TempF =  9.0*Temp/5.0 + 32.0;
			Units = '°C';
	}
	 
     if ( document.Input.WindUnits[0].checked ) WindMph = Wind; 
     if ( document.Input.WindUnits[1].checked ) WindMph = 1.15078*Wind; 
     if ( document.Input.WindUnits[2].checked ) WindMph = 2.23693*Wind;
     if ( document.Input.WindUnits[3].checked ) WindMph = 0.62136*Wind;
	 if ( WindMph <= 3 ) WindMph = 3.0;

 
	 WindChill = ( 35.74 + 0.6215*TempF - 35.75*Math.pow(WindMph,0.16) + 0.4275*TempF*Math.pow(WindMph,0.16) );

     if ( document.Input.TempUnits[1].checked ) WindChill = 5.0*(WindChill-32.0)/9.0;

     if ( WindChill > Temp) WindChill = Temp;

     document.Input.windchill.value = Math.round(WindChill) + Units;

	 if (TempF > 45.0 || TempF < -45.0 || WindMph > 60.0 ) {
  	 document.Input.windchill.value = "Undefined";
	 }

}