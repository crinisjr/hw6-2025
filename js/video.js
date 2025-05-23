var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay=false;
	video.loop=false;

	document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	let volume= document.getElementById("slider").value;
	document.getElementById("volume").textContent= volume+"%";

	});

	document.getElementById("pause").addEventListener("click", function(){
		video.pause();

	});

	document.getElementById("slower").addEventListener("click", function(){
		video.playbackRate *=0.9;
		console.log("New Speed:", video.playbackRate);

	});

	document.getElementById("faster").addEventListener("click", function(){

		video.playbackRate /=0.9;
		console.log("New Speed:", video.playbackRate);

	});

	document.getElementById("skip").addEventListener("click",function(){
		if(video.currentTime+10<video.duration){
			video.currentTime+=10;
		}
		else{
			video.currentTime=0;
		}

		console.log("Current Location:", video.currentTime);

	
	});

	document.getElementById("mute").addEventListener("click", function(){

		if(video.muted){
			video.muted=false;
			mute.textContent="Mute";
		}
		else{
			video.muted=true;
			mute.textContent="Unmute";
			}

	});

	document.getElementById("slider").addEventListener("input", function(){

		video.volume=this.value *0.01;
		document.getElementById("volume").textContent= Math.round(video.volume*100)+"%";




	});

	document.getElementById("vintage").addEventListener("click", function(){
		video.classList.add("oldSchool");

	});


	document.getElementById("orig").addEventListener("click", function(){
		video.classList.remove("oldSchool");

	});




});

