import { isEscEvent, isEnterEvent } from './util.js';

const userModalElement = document.querySelector('.setup');
const userModalOpenElement = document.querySelector('.setup-open');
const userModalCloseElement = userModalElement.querySelector('.setup-close');

const openPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const openUserModal = () => {
  userModalElement.classList.remove('hidden');

  document.addEventListener('keydown', openPopupEscKeydown);
};

const closeUserModal = () => {
  userModalElement.classList.add('hidden');

  document.removeEventListener('keydown', openPopupEscKeydown);
};

userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    closeUserModal();
  }
});

export {
  openUserModal,
  closeUserModal
};