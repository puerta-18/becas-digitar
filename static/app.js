//Swiper Testimonios
var swiper = new Swiper(".swiper-testimonios", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

//Swiper Eventos
var swiper = new Swiper(".Swiper-eventos", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
