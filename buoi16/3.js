var nut = document.querySelectorAll(".nut");
for (let i = 0; i < nut.length; i++) {
  nut[i].onclick = function () {
    var dt = this.getAttribute("data-effect");
    var a = document.getElementById("dt");
    a.classList.toggle("dichuyen");
  };
}
