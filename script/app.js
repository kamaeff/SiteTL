const mainMenu = document.querySelector(".header__main-menu");
const closeMenu = document.querySelector(".header__close-menu");
const openMenu = document.querySelector(".header__mobile-menu");
const menu_items = document.querySelectorAll("nav .header__main-menu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}

const langCurrent = document.querySelector('.languages__item--active');
const languages = document.querySelectorAll('.languages__item');

// Попробуйте её самостоятельно разобрать
const siblings = el => [].slice.call(el.parentNode.children).filter(child => (child !== el)); // объявляем функцию, которая будет возвращать соседние элементы

languages.forEach(lang => {
    lang.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (lang.classList.contains('languages__item--active')) {
            siblings(lang).forEach(el => { // для каждого соседнего элемента
                el.classList.add('languages__item--show') // добавляем класс для показа
            })
        } else {
            lang.classList.add('languages__item--active'); // добавляем класс активности
            lang.classList.remove('languages__item--show'); // удаляем класс для показа

            siblings(lang).forEach(el => {
                el.classList.remove('languages__item--active');
                el.classList.remove('languages__item--show');
            })
        }

    });

});


const swiper = new Swiper(".swiper-container", {
  loop: true,

  //Autoplay
  autoplay: {
    delay: 3000,
  },

  //Navigation
  navigation: {
    clickable: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //Scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",

    draggable: true,
    dragSize: '100px',
  },

  mousewheel: true,
});
