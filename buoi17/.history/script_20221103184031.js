var nut=document.querySelectorAll('.nutchuyen ul li');
let sildes=document.querySelectorAll('.ndslide ul li')
for (let i = 0; i < nut.length; i++) {
    nut[i].onclick=function () {
        for (let k = 0; k < nut.length; k++) {
            nut[k].classList.remove('active')
        }
        this.classList.add('active');
        // console.log(this.nextElementSibling);
        var nutactive=this;
        var vt=0;
        for(vt=0;nutactive=nutactive.previousElementSibling;vt++){
        }
        for (let i = 0; i< sildes.length; i++) {
            sildes[i].classList.remove('active');
            sildes[vt].classList.add('active');
        }
        // console.log(vt);
    }
}
autoSlide();
function autoSlide(){
    let thoigian=setInterval(function(){
       let vtslide
    },5000);
}