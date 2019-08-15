(function(){

	//for camera video stream
	var video = document.getElementById('video') ;
	
	//for showing camera stream on page
	canvas = document.getElementById('canvas') ;
	context = canvas.getContext('2d') ;

	//for getting camera stream as a still picture
	photo = document.getElementById('photo') ;

	//for getting number of input options
	const select = document.getElementById('select');


	function gotDevices(mediaDevices) {
    select.innerHTML = '';
  	select.appendChild(document.createElement('option'));
  	let count = 1;
  	mediaDevices.forEach(mediaDevice => {
    if (mediaDevice.kind === 'videoinput') {
      const option = document.createElement('option');
      option.value = mediaDevice.deviceId;
      const label = mediaDevice.label || `Camera ${count++}`;
      const textNode = document.createTextNode(label);
      option.appendChild(textNode);
      select.appendChild(option);
    }
  	});
	}

	//for showing media stream, compatible with most of the browsers
	vendorURL = window.URL ||
				window.webkitURL ;
	navigator.getMedia = navigator.getUserMedia ||
						 navigator.webkitGetUserMedia ||
						 navigator.mozGetUserMedia ||
						 navigator.msGetUserMedia ;
	navigator.getMedia({video: { facingMode: "environment" } }, function(stream) {
		video.srcObject = stream ;
		video.play() ;
	}, function(error){
		alert("Error: Permission denied or camera could not be opened")
	});

	//drawing image on canvas which can be used further
	document.getElementById('cap-btn').addEventListener('click', function(){
		context.drawImage(video, 0, 0, 400, 300)
		photo.setAttribute('src', canvas.toDataURL('image'))
	});
})();
