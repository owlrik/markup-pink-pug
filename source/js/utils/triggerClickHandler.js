(function() {
  'use strict';

  let navigationMenu = document.querySelector('.main-nav');
  let navigationMenuBurger = navigationMenu.querySelector('.main-nav__trigger');

  let onTriggerClick = function(evt) {
    evt.preventDefault();
    navigationMenu.classList.toggle('main-nav--closed');
    navigationMenu.classList.toggle('main-nav--opened');
  };

  navigationMenuBurger.addEventListener('click', onTriggerClick);
})();
