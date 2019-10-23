(function() {
  'use strict';

  const ESC_KEY = 'Escape';

  let contestForm = document.querySelector('.form.contest__form');
  if (contestForm) {
    let inputName = contestForm.querySelector('#name');
    let inputSurname = contestForm.querySelector('#surname');
    let inputEmail = contestForm.querySelector('#email');
    let btnSubmit = contestForm.querySelector('.form__submit .button');

    let overlay = document.querySelector('.modal');
    let successWindow = overlay.querySelector('.form-message.form-message--success');
    let errorWindow = overlay.querySelector('.form-message.form-message--error');
    let btnCloseSuccessPopup = overlay.querySelector('.form-message--success .form-message__button');
    let btnCloseErrorPopup = overlay.querySelector('.form-message--error .form-message__button');

    let onSuccessPopupEscPress = function(evt) {
      if (evt.key === ESC_KEY) {
        closeSuccessPopup();
      }
    };

    let onErrorPopupEscPress = function(evt) {
      if (evt.key === ESC_KEY) {
        closeErrorPopup();
      }
    };

    let showSuccessPopup = function() {
      overlay.classList.add('modal--show');
      successWindow.classList.remove('hidden');

      document.addEventListener('keydown', onSuccessPopupEscPress);
    };

    let showErrorPopup = function() {
      overlay.classList.add('modal--show');
      errorWindow.classList.remove('hidden');

      document.addEventListener('keydown', onErrorPopupEscPress);
    };

    let closeSuccessPopup = function() {
      overlay.classList.remove('modal--show');
      successWindow.classList.add('hidden');

      document.removeEventListener('keydown', onSuccessPopupEscPress);
    };

    let closeErrorPopup = function() {
      overlay.classList.remove('modal--show');
      errorWindow.classList.add('hidden');

      document.removeEventListener('keydown', onErrorPopupEscPress);
    };

    let onInputInvalid = function(input) {
      input.classList.add('text-field__input--invalid');
    };

    let onInputBlur = function(input) {
      if (input.checkValidity()) {
        input.classList.remove('text-field__input--invalid');
      }
    };

    btnSubmit.addEventListener('click', function(evt) {
      evt.preventDefault();

      if (contestForm.checkValidity()) {
        showSuccessPopup();
      } else {
        showErrorPopup();
      }
    });

    inputName.addEventListener('blur', function () {
      onInputBlur(inputName);
    });
    inputSurname.addEventListener('blur', function () {
      onInputBlur(inputSurname);
    });
    inputEmail.addEventListener('blur', function () {
      onInputBlur(inputEmail);
    });

    inputName.addEventListener('invalid', function () {
      onInputInvalid(inputName);
    });
    inputSurname.addEventListener('invalid', function () {
      onInputInvalid(inputSurname);
    });
    inputEmail.addEventListener('invalid', function () {
      onInputInvalid(inputEmail);
    });

    btnCloseSuccessPopup.addEventListener('click', function () {
      closeSuccessPopup();
    });
    btnCloseErrorPopup.addEventListener('click', function () {
      closeErrorPopup();
    });
  }
})();

