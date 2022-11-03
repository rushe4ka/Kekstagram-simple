import {isEscapeKey, isEnterKey} from './util.js';

const uploadInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadOverlayCancel = uploadOverlay.querySelector('#upload-cancel');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeOverlayModal();
  }
};

function openOverlayModal() {
  uploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onModalEscKeydown);
}

function closeOverlayModal() {
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onModalEscKeydown);
}

// при изменении поля загрузки открыть окно редактирования

uploadInput.addEventListener('input', () => {
  openOverlayModal();
});

// при фокусе с клавиатуры открыть окно редактирования

uploadInput.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openOverlayModal();
  }
});

// при клике на крестик закрыть окно редактирования

uploadOverlayCancel.addEventListener('click', () => {
  closeOverlayModal();
});

// при нажатии Enter закрыть окно редактирования

uploadOverlayCancel.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    closeOverlayModal();
  }
});
