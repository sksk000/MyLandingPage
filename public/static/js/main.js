var menubutton = document.getElementById("menubutton");
var text = document.getElementById("page");

menubutton.addEventListener("click", function () {
  text.classList.toggle("openmenu");
});
