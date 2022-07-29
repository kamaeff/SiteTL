import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.topside__swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.topside__swiper-button-next',
    prevEl: '.topside__swiper-button-prev',
    
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.topside__swiper-scrollbar',
  },
});
