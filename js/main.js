const swiper = new Swiper('.swiper-container', {
   loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.examples-button-next',
    prevEl: '.examples-button-prev',
  },
});

var menuButton = document.querySelector(".header__menu-button");
menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке меню');
  document
  .querySelector(".header__fragment")
  .classList.toggle('header__fragment--visible');
})