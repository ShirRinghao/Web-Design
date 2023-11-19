var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%'; // Update the text content with the current volume

	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 0.9;
	console.log("New playbackRate is: ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate / 0.9;
	console.log("New playbackRate is: ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}else{
		video.currentTime=video.currentTime + 10;
	}
	console.log("Skip 10 seconds to: " + video.currentTime + " seconds");
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted){
		video.muted = false;
		console.log("Video has been unmuted.");
		document.getElementById("mute").innerHTML = "Mute";
	}else{
		video.muted = true;
		console.log("Video has been muted.");
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function(){
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume*100  + '%'; // Update the text content with the current volume

});

document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	console.log("Original");
	video.classList.remove("oldSchool");
});
