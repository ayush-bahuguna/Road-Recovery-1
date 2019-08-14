

// Google Geocoding API key : AIzaSyC4cnlyhnEYTluJRP8QKwVXbinzL6-qkFk

document.getElementById('sub-btn').addEventListener('click', function(){	
	
	if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
        	latitude = position.coords.latitude ;
        	longitude = position.coords.longitude ;
        });
    } else {
        console.error("Geolocation is not supported by this browser!");
    }

 //   https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key="AIzaSyC4cnlyhnEYTluJRP8QKwVXbinzL6-qkFk"
 //   navigator.geolocation.getCurrentPosition(function(position) {
 //  		lat = position.coords.latitude ;
 //  		long = position.coords.longitude;
 //  		console.log(lat) ;
 //  		console.log(long) ;
	// });
});