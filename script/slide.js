import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
const swiper = new Swiper(".swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  // Navigation arrows
  slideToClickedSlide: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    clickable: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  autoplay: {
    delay: 3000,
  },
});
