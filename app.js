$(function(){


	var api_key = "1672a5a754b3502e30ebcfe991ce4eec";
	

	
	//Get location information

		var loc;

	$.getJSON('https://ipinfo.io', function(data){

  	loc = data.loc
  	loc = loc.split(",");
  	console.log(loc);

  	//Get weather information

  	$.getJSON('https://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + loc[0] + '&lon=' + loc[1] + '&APPID=' + api_key, function(wd){

  		var currentWeather = wd.weather[0].description;
  		var currentLocation = wd.name;
  		var currentCountry = wd.sys.country;
  		var currentTemp = wd.main.temp;
  		var currentHumidity = wd.main.humidity;
  		var currentWind = wd.wind.speed;
  		var currentIcon = wd.weather[0].icon;



  	$('#location').html(currentLocation + " , " + currentCountry);
  	$('#weather').html(currentWeather);
  	$('#temp').html(currentTemp + " &deg;C ");
  	$('#humidity').html(currentHumidity + " % ");
  	$('#wind').html(currentWind + " mps ");


  	var iconSrc = "https://openweathermap.org/img/w/" + currentIcon + ".png";

  	$('#weather').prepend('<img src =' + iconSrc + '>');

  	var temp = currentTemp
  	var cel = true;
  	var ftemp;
  	ftemp = (temp * 9/5) + 32;

  	$('#switch').click(function(){

  		cel =! cel;
  		if (cel) {
  			$('#temp').html(temp + " &deg;C ");
  		} else {

  			$('#temp').html(ftemp + " &deg;F ");
  		}


  	})	
  	})
})



})
