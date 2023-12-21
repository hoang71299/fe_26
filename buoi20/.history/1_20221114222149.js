$('.nd').slideUp();
$('h3').click(function () { 
    $('.nd').slideUp();
    $(this).next().slideDown();
});