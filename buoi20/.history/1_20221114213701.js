$('.nd').slideUp();
$('h3').click(function () { 
    $('.nd').next().slideUp();
    $(this).next().slideDown();
});