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


const docuE = document.documentElement;
const newCursor = document.getElementById('cursor')
let posX = 0;
let posY = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.body.onmousemove = function(e) {
        posX = e.clientX + "px";
        posY = e.clientY + "px";

        newCursor.style.left = posX;
        newCursor.style.top = posY;
    }
});