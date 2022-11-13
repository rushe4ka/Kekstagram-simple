import { isEscapeKey, isEnterKey } from './util.js';
import { resetScale } from './scale.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = body.querySelector('#upload-file');
const uploadOverlay = body.querySelector('.img-upload__overlay');
const uploadOverlayCancel = uploadOverlay.querySelector('#upload-cancel');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const templateSuccess = document.querySelector('#success')
  .content
  .querySelector('.success'); // элемент с образцом разметки окна success
const templateError = document.querySelector('#error')
  .content
  .querySelector('.error'); // элемент с образцом разметки окна error

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

// при нажатии Esc закрыть окно редактирования

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
  document.addEventListener('click', onModalEscButtonClick);
}

// закрытие окна редактирования изображения

function closeOverlayModal() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
  document.removeEventListener('click', onModalEscButtonClick);
  uploadForm.reset();
  imgUploadPreview.removeAttribute('class');
  resetScale();
}

// окно предупреждения при отправке формы

const onErrorButtonClick = () => hideMessage();

const onOverlayClick = () => hideMessage();

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const showSuccessMessage = () => {
  const successMessage = templateSuccess.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  document.body.append(successMessage);
  document.body.style.overflow = 'hidden';
};

const showErrorMessage = () => {
  const errorMessage = templateError.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  errorMessage.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  document.body.append(errorMessage);
  document.body.style.overflow = 'hidden';
};

function hideMessage() {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  document.body.style.overflow = 'auto';
}


export {
  closeOverlayModal,
  showSuccessMessage,
  showErrorMessage
};
