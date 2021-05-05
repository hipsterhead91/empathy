const burger = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__list');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu__list_visible');
  body.classList.toggle('locked');
});