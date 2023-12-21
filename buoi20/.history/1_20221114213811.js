$('.nd').slideUp();
$('h3').click(function () { 
    $('.nd').next.slideDown();
    $(this).next.slideUp();
});