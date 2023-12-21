$('.dn').click(function(){
    $('.formdn').addClass('active');
});
$('.nutdn').click(function(){
    $('.formdn').removeClass('active');
});
$('.popup').addClass('active');
$('.popup i').click(function(){
    $('.popup').removeClass('active');
});
var tb= setInterval(function(){
    $('.popup').removeClass('active');
},3000)

