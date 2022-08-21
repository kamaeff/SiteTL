const mainMenu = document.querySelector(".header__main-menu");
const closeMenu = document.querySelector(".header__close-menu");
const openMenu = document.querySelector(".header__mobile-menu");
const menu_items = document.querySelectorAll("nav .header__main-menu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}

const swiper = new Swiper(".swiper-container", {
  spaceBetween: 10,
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
  },

  mousewheel: true,
});
