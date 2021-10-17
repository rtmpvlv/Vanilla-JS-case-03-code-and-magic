import {showAlert, getRandomArrayElement} from './util.js';
import {sendData} from './api.js';

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const Colors = {
  FIREBALL: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ],
  EYES: [
    'black',
    'red',
    'blue',
    'yellow',
    'green',
  ],
  COAT: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
  ],
};

const wizardForm = document.querySelector('.setup-wizard-form');
const userNameInput = wizardForm.querySelector('.setup-user-name');
const fireballColorElement = wizardForm.querySelector('.setup-fireball-wrap');
const eyesColorElement = wizardForm.querySelector('.wizard-eyes');
const coatColorElement = wizardForm.querySelector('.wizard-coat');
const fireballColorInput = wizardForm.querySelector('[name="fireball-color"]');
const eyesColorInput = wizardForm.querySelector('[name="eyes-color"]');
const coatColorInput = wizardForm.querySelector('[name="coat-color"]');

userNameInput.addEventListener('invalid', () => {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

fireballColorElement.addEventListener('click', (evt) => {
  const randomColor = getRandomArrayElement(Colors.FIREBALL);
  evt.target.style.backgroundColor = randomColor;
  fireballColorInput.value = randomColor;
});

const setEyesClick = (cb) => {
  eyesColorElement.addEventListener('click', (evt) => {
    const randomColor = getRandomArrayElement(Colors.EYES);
    evt.target.style.fill = randomColor;
    eyesColorInput.value = randomColor;
    cb();
  });
};

const setCoatClick = (cb) => {
  coatColorElement.addEventListener('click', (evt) => {
    const randomColor = getRandomArrayElement(Colors.COAT);
    evt.target.style.fill = randomColor;
    coatColorInput.value = randomColor;
    cb();
  });
};

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

export {setUserFormSubmit, setEyesClick, setCoatClick};
