import { isEscapeKey, isEnterKey } from './util.js';

const body = document.querySelector('body');
const uploadInput = body.querySelector('#upload-file');
const uploadOverlay = body.querySelector('.img-upload__overlay');
const uploadOverlayCancel = uploadOverlay.querySelector('#upload-cancel');
const imgUploadPreview = uploadOverlay.querySelector('.img-upload__preview');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeOverlayModal();
  }
};

function openOverlayModal() {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
}

function closeOverlayModal() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
  imgUploadPreview.removeAttribute('style');
}

// при изменении поля загрузки открыть окно редактирования

uploadInput.addEventListener('change', () => {
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
