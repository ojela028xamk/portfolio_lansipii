// Get the modal
let modal = document.getElementById("myModal");
let modalsivu1 = document.getElementById("modal_sivu1");
let modalsivu2 = document.getElementById("modal_sivu2");
let modalsivu3 = document.getElementById("modal_sivu3");

// Get the button that opens the modal
let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
let span = document.querySelectorAll(".close");

for (let i = span.length; i--;) {
  span[i].addEventListener('click', suljeNappi);
}

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal.style.display = "block";
  modalsivu1.style.display = "block";
  modalsivu2.style.display = "none";
  modalsivu3.style.display = "none";
}
btn2.onclick = function() {
  modal.style.display = "block";
  modalsivu1.style.display = "none";
  modalsivu2.style.display = "block";
  modalsivu3.style.display = "none";
}
btn3.onclick = function() {
  modal.style.display = "block";
  modalsivu1.style.display = "none";
  modalsivu2.style.display = "none";
  modalsivu3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function suljeNappi() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
