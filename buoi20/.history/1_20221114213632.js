$('.nd').slideUp();
$('h3').click(function () { 
    $('.nd').next().slideToggle();
    $('this').next().slideToggle();
});