$(window).on('load',function(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      522:{
        slidesPerView:1.1,
        spaceBetween: 20
      },
      600:{
        slidesPerView:1.2,
        spaceBetween: 20
      },
      640:{
        slidesPerView:1.3,
        spaceBetween: 20
      },
      680:{
        slidesPerView:1.4,
        spaceBetween: 20
      },
      735:{
        slidesPerView:1.5,
        spaceBetween: 20
      },
      800:{
        slidesPerView:1.6,
        spaceBetween: 20
      },
      800:{
        slidesPerView:1.7,
        spaceBetween: 20
      },
      870:{
        slidesPerView:1.8,
        spaceBetween: 20
      },
      900:{
        slidesPerView:1.9,
        spaceBetween: 20
      },
      990:{
        slidesPerView:2,
        spaceBetween: 20
      },
      1130: {
        slidesPerView:2.3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView:2.5,
        spaceBetween: 20
      },
      1281: {
        slidesPerView:3}
    }
  });
    
  })