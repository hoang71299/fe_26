$('.nd').slideUp();
$('h3').click(function () { 
    $('.nd').slideDown();
    $(this).next().slideToggle();();
});