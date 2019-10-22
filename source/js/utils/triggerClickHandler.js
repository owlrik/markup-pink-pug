(function() {
  'use strict';

  let navigationMenu = document.querySelector('.main-nav');
  let navigationMenuBurger = navigationMenu.querySelector('.main-nav__trigger');

  // TODO: вынести из этого скрипта в секцию head
  navigationMenu.classList.remove('main-nav--no-js');

  let onTriggerClick = function(evt) {
    evt.preventDefault();
    navigationMenu.classList.toggle('main-nav--closed');
    navigationMenu.classList.toggle('main-nav--opened');
  };

  navigationMenuBurger.addEventListener('click', onTriggerClick);
})();
