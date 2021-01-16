function closeModal(modal){
  var modal = document.getElementById(modal);
	modal.style.display = "none";
}
function showModal(modal){
	var modal = document.getElementById(modal);
	console.log("triggered");
		modal.style.display = "block";
}
function switchModal(open,close){
  var modal = document.getElementById(close);
	modal.style.display = "none";
  showModal(open);
}
