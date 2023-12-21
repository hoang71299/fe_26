let Next=document.querySelector('.nutchuyen .right');
let slides=document.querySelectorAll('.ndslide ul li')
console.log(slides);
var chisohientai=0;
var slslides=slides.length;//so luong slide
let moveslideRight= function(){
    // alert('ban da click nut right')
    var pthientai=slides[chisohientai];
    if(chisohientai<slides - 1){
        chisohientai=chisohientai + 1;
    }else{
        chisohientai=0;
    }
    var pttieptheo=slides[chisohientai];
    console.log(pthientai);
    console.log(pttieptheo);
}
Next.addEventListener('click',moveslideRight);
