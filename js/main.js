$(function(){
    $('.infobtn').on('click',function(){
        $('#infoBox').toggleClass('act');
    });


    $('#name').on('click', function(){
        $('.nameUl').toggleClass('db');
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.ham').addClass('act');
        }else{
            $('.ham').removeClass('act');
        }
    });

    $('.ham').on('click', function(){
        if(
            $('.ham').hasClass('act')
        ){
            $('.ham').toggleClass('ck')
        }
        $('#haminner').toggleClass('act')
    });

    $('.page-scroll').on('click', function(){
        $('#haminner').removeClass('act');
        $('.ham').removeClass('ck');
    });

});


var pointSize = $('#cursor').width() / 2;
    $('body').mousemove(function(e) {
    $('#cursor').css("top", e.pageY - pointSize);
    $('#cursor').css("left", e.pageX - pointSize);
    $('#cursor').fadeIn();
}); // Mouse Following
// Basic
$(".btn,input,a,textarea").on("mouseover", function() {
    $('#cursor').addClass('arrow')
}); // Hover
$(".btn,input,a,textarea").on("mouseout", function() {
    $('#cursor').removeClass('arrow')
 }); // Mouseouts