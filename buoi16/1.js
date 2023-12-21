var nut = document.querySelectorAll(".bieutuong");
for (let i = 0; i < nut.length; i++) {
  nut[i].onclick = function () {
    var dt = this.getAttribute("data-click");
    var a = document.getElementById("dt");
    a.classList.toggle("active");
  };
}
