let Next=document.querySelector('.nutchuyen .right');
let slides=document.querySelectorAll('.ndslide ul li')
console.log(slides);

var chisohientai=0;
var slslides=slides.length;//so luong slide
let moveslideRight= function(){
    // alert('ban da click nut right')
    var pthientai=slides[chisohientai];
    if(chisohientai<slslides - 1){
        chisohientai=chisohientai + 1;
    }else{
        chisohientai=0;
    }
    var pttieptheo=slides[chisohientai];
    // console.log(pthientai);
    // console.log(pttieptheo);
    var ketThucAnSlide = function(){
        console.log('slide hiện tại đã ẩn rồi');
    }
    pthientai.addEventListener('webkitAnimationEnd',ketThucAnSlide);
    pthientai.classList.add('anslideNext');
    pttieptheo.classList.add('hienslideNext');
}
Next.addEventListener('click',moveslideRight);
