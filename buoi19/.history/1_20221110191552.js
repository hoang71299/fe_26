// $("h1").animate({opacity:0;});
// var nut=document.querySelector('button');
// var khoi=document.querySelector('.khoi');
// nut.onclick=function(){
//     khoi.classList.add('dichuyen')
// }
$('button').click(function(){
    $('.khoi').addClass('dichuyen');
});
$('.nut1').click(function(){
    $('.nut2').toggleClass('dichuyen1');
});