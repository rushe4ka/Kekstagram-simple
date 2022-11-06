import { isEscapeKey, isEnterKey } from './util.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = body.querySelector('#upload-file');
const uploadOverlay = body.querySelector('.img-upload__overlay');
const uploadOverlayCancel = uploadOverlay.querySelector('#upload-cancel');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

// при изменении поля загрузки открыть окно редактирования

uploadInput.addEventListener('change', (openOverlayModal));

// при фокусе с клавиатуры открыть окно редактирования

uploadInput.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openOverlayModal();
  }
});

// при клике на крестик закрыть окно редактирования

const onModalEscButtonClick = uploadOverlayCancel.addEventListener('click', (closeOverlayModal));

// при нажатии Enter закрыть окно редактирования

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeOverlayModal();
  }
};

// открытие окна редактирования изображения

function openOverlayModal() {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
  document.removeEventListener('click', onModalEscButtonClick);
}

// закрытие окна редактирования изображения

function closeOverlayModal() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
  uploadForm.reset();
  imgUploadPreview.removeAttribute('class');
}
