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

});