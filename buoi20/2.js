// var menu=document.querySelector('.menu');
// var nuttop=document.querySelector('.nuttop');
// //su kien cuon chuot
// window.addEventListener('scroll',function(){
//     // console.log(window.pageYOffset);
//     if(window.pageYOffset>200){
//         // console.log('vi tri mouse lon hon 200px');
//         menu.classList.add('doimenu')
//         nuttop.classList.add('active')
//     }else{
//         menu.classList.remove('doimenu')
//         nuttop.classList.remove('active')
//     }
// })
$(window).scroll(function () { 
    if($(this).scrollTop()>200){
        $('.menu').addClass('doimenu');
        $('.nuttop').addClass('active');
    }else{
        $('.menu').removeClass('doimenu');
        $('.nuttop').removeClass('active');
    }
});

$('.nuttop').click(function () { 
    $('html,body').animate({scrollTop:1000},1000)
});