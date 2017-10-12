// console.log("Sanity Check")

$(document).ready(()=>{
	$('#weather-form').submit((event)=>{
		event.preventDefault();
		// console.log("User submitted the form");
		var zipCode = $('#zip-code').val();
		// console.log(zipCode);
		var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`;
		console.log(weatherUrl)
	});
});
