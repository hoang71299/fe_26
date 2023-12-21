$('.nd').slideUp();
$('h3').click(function () { 
    $('.nd').next().slide();
    $(this).next().slideDown();
});