const swiper = new Swiper('.image-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
      spaceBetweenSlides: 20
    },
  }
});
