var nut = document.querySelectorAll(".nut");
for (let i = 0; i < nut.length; i++) {
  nut[i].onclick = function () {
    // console.log("nút thứ " + i);
    console.log(this.getAttribute("data-mk"));
  };
}
