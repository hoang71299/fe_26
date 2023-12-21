$('.nd').slideUp();
$('h3').click(function () { 
    $('.nd').slideup();
    $(this).next().slideUp();
});