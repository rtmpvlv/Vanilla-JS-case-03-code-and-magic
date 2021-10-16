import { sendData } from './api.js';
import { showAlert } from './util.js';

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const wizardForm = document.querySelector('.setup-wizard-form');
const userNameInput = wizardForm.querySelector('.setup-user-name');

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' символов')
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' символов')
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
});

const setUserFormSubmit = (onSuccess) => {
  wizardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
  });
};

export {
  setUserFormSubmit,
};
// userNameInput.addEventListener('invalid', () => {
//   if (userNameInput.validity.tooShort) {
//     userNameInput.setCustomValidity('Имя должно состоять минимум из двух символов');
//   } else if (userNameInput.validity.tooLong) {
//     userNameInput.setCustomValidity('Имя не должно не должно превышать 25-ти символов');
//   } else if (userNameInput.validity.valueMissing) {
//     userNameInput.setCustomValidity('Поле обязательно для заполнения');
//   } else {
//     userNameInput.setCustomValidity('');
//   }
// });
