// console.log("Sanity Check")

// apiKey is loading inside of config.js

$(document).ready(()=>{
	$('#weather-form').submit((event)=>{
		event.preventDefault();
		// console.log("User submitted the form");
		var zipCode = $('#zip-code').val();
		// console.log(zipCode);
		var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${apiKey}`;
		// console.log(weatherUrl)
		// getJSON: 
		// 1. WHERE
		// 2. Function when back
		$.getJSON(weatherUrl,(weatherData)=>{
			// console.log(weatherData);
			var currTemp = weatherData.main.temp;
			var temps = {
				curr: weatherData.main.temp,
				max: weatherData.main.temp_max,
				min: weatherData.main.temp_min,
			}
			var name = weatherData.name;
			var icon = weatherData.weather[0].icon;
			var newHTML = `<div><img src="http://openweathermap.org/img/w/${icon}.png">The temp in ${name} is currently ${currTemp}&deg;.</div>`
			newHTML += `<div>The daily high is ${temps.max}&deg;.`
			newHTML += `<div>The daily low is ${temps.min}&deg;.`
			$('#temp-info').html(newHTML);
		});
	});
});
