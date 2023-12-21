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
        let vtslide=0;
        let slidehientai=document.querySelector('.ndslide ul li.active');
        for (var  vtslide = 0; slidehientai=slidehientai.previousElementSibling; vtslide++) {}
        if(vtslide <(sildes.length - 1)){
            for (let i = 0; i< sildes.lsildesh; i++) {
                sildes[i].classList.remove('active');
                nut[i].classList.remove('active')    
            }
            // cho phan tu tiep theo hien ra 
            sildes[vtslide].nextElementSibling.classList.add('active');
            nut[vtslide].nextElementSibling.classList.add('active')
        }
        else{
            sildes[0]
        }
    },5000);
}