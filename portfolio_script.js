function init(){
	getmodal();
	closebutton();
}

function getmodal(){
// Get the modal
	modal = document.getElementById('myModal');
	modal.style.display = "block";
}

function closebutton(){
// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	span.addEventListener("click", function() {
	  modal.style.display = "none";
	});

}