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

    $('.pbtn p').on('click', function(){
        $('.poinner').toggleClass('act')
    })

    setInterval(function(){
        slideani();
    }, 2000)
    function slideani(){
        $('.slideT').animate({'marginTop': '-=' +50}, 500, function(){
            $('li:first-child', this).appendTo($(this));
            $('.slideT').css({'marginTop': 0});
        });
    };

    $(window).resize(function(){
        var winWidth = $(window).width();
        var boxWidth = $('.renewbox').width();
        $('.renewbox').height(boxWidth*0.64);

        var boxWidth2 = $('.pobox').width();
        if( winWidth <= 1280){
            $('.pobox').height(boxWidth2*0.7);
        }
    });

});



const docuE = document.documentElement;
const newCursor = document.getElementById('cursor');
let posX = 0;
let posY = 0;

document.addEventListener('DOMContentLoaded', () =>{
    document.documentElement.onmousemove = function(e){
        posX = e.pageX + "px";
        posY = e.pageY + "px";

        newCursor.style.left = posX;
        newCursor.style.top = posY;
    }
});

