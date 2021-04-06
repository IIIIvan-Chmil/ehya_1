$(document).ready(function () {
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
  document
  .querySelector(".header__fragment")
  .classList.toggle('header__fragment--visible');
  document
  .querySelector(".header__nav-fixed")
  .classList.toggle('header__nav-fixed--visible');
});

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeModal(event);
    };
  });

});