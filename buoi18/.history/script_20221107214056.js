let Next=document.querySelector('.nutchuyen .right'),
 Prev=document.querySelector('.nutchuyen .left'),
 slides=document.querySelectorAll('.ndslide ul li');
console.log(slides);
var chisohientai=0;
var slslides=slides.length;//so luong slide
let trangthai='TamDung';// hieu ung dang tam dung
let moveslideRight= function(){
    // alert('ban da click nut right')
    if(trangthai === 'chuyendong'){return false}
    trangthai='chuyendong';
    let Trangthaicua2cd=0;

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
        // console.log('slide hiện tại đã ẩn rồi');
        this.classList.remove('active')
        this.classList.remove('anslideNext')
        Trangthaicua2cd ++;
        if(Trangthaicua2cd==2){trangthai='TamDung'}
    }
    pthientai.addEventListener('webkitAnimationEnd',ketThucAnSlide);
    var ketThucHienSlide = function(){
        // console.log('slide tiếp theo đã hiện ra');
        this.classList.add('active')
        this.classList.remove('hienslideNext')
        Trangthaicua2cd ++;
        if(Trangthaicua2cd==2){trangthai='TamDung'}
    }
    pttieptheo.addEventListener('webkitAnimationEnd',ketThucHienSlide);
    pthientai.classList.add('anslideNext');
    pttieptheo.classList.add('hienslideNext');
}
Next.addEventListener('click',moveslideRight);
// xu ly nut left
let moveslideLeft= function(){
    // alert('ban da click nut right')
    if(trangthai === 'chuyendong'){return false}
    trangthai='chuyendong';
    let Trangthaicua2cd=0;

    var pthientai=slides[chisohientai];
    if(chisohientai>0){
        chisohientai=chisohientai + 1;
    }else{
        chisohientai=0;
    }
    var pttieptheo=slides[chisohientai];
    // console.log(pthientai);
    // console.log(pttieptheo);
    var ketThucAnSlide = function(){
        // console.log('slide hiện tại đã ẩn rồi');
        this.classList.remove('active')
        this.classList.remove('anslideNext')
        Trangthaicua2cd ++;
        if(Trangthaicua2cd==2){trangthai='TamDung'}
    }
    pthientai.addEventListener('webkitAnimationEnd',ketThucAnSlide);
    var ketThucHienSlide = function(){
        // console.log('slide tiếp theo đã hiện ra');
        this.classList.add('active')
        this.classList.remove('hienslideNext')
        Trangthaicua2cd ++;
        if(Trangthaicua2cd==2){trangthai='TamDung'}
    }
    pttieptheo.addEventListener('webkitAnimationEnd',ketThucHienSlide);
    pthientai.classList.add('anslideNext');
    pttieptheo.classList.add('hienslideNext');
}
Prev.addEventListener('click',moveslideLeft);
