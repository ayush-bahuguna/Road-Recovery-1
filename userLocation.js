
// Google Geocoding API key : AIzaSyC4cnlyhnEYTluJRP8QKwVXbinzL6-qkFk

document.getElementById('cap-btn').addEventListener('click', function(){
		if('geolocation' in navigator) {
		
			// get longitude and latitude
			navigator.geolocation.getCurrentPosition(position => {
				lat = position.coords.latitude ;
				lng = position.coords.longitude ;
				latlng = new google.maps.LatLng(lat, lng);
				var geocoder =  new google.maps.Geocoder();

				//get location name using coordinates
				geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        address = ("Location: " + results[1].formatted_address);
                        console.log(address) ;
                    }
                }
            });
		});
		} else {
			console.log('geolocation not available') ;
		}
});
