function init (){
	overlay();
}

function overlay (){
	overlay = document.getElementById("overlay");
	overlay.style.display = "block";
	overlay.addEventListener("click", function(){
         alert("Actually you should hit space");
    });

	window.addEventListener("keypress", function(){
		var key = event.key;
		if (key == " "){
			overlay.style.display = "none";
		}
	});
	return;
}
