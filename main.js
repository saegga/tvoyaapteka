$(document).ready(function(){
    $(".drop_choice").customScrollbar({
        hScroll: false,
        vScroll: true,
        skin: "gray-skin",
        fixedThumbHeight: 32
    });
    $('.choice_apteke').on('click', function(){
        $(this).hasClass('open') ? $(this).removeClass('open') : $(this).addClass('open');
    });
});