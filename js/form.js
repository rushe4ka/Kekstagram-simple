import './overlay-effect.js';

import { sendData } from './api.js';
import { isEscapeKey, isEnterKey } from './util.js';
import { resetScale } from './scale.js';

const MIN_COMMENT_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
const uploadForm = document.querySelector('.img-upload__form');
const comment = uploadForm.querySelector('.text__description');
const submitButton = uploadForm.querySelector('#upload-submit');
const body = document.querySelector('body');
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

// подключение Pristine

const pristine = new Pristine(
  uploadForm,
  {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text'
  },
  true
);

// валидация длины комментария

const validateCommentLength = (value) => value.length >= MIN_COMMENT_LENGTH && value.length <= MAX_COMMENT_LENGTH;

pristine.addValidator(
  comment,
  validateCommentLength,
  `Длина комментария от ${MIN_COMMENT_LENGTH} до ${MAX_COMMENT_LENGTH} знаков`
);

// при клике на кнопку закрыть модальное окно

const onErrorButtonClick = () => hideModal();

// при клике в любое место закрыть модальное окно

const handleOutside = (evt) => {
  if (!evt.target.closest('div')) {
    hideModal();
    window.removeEventListener('click', handleOutside);
  }
};

// при нажатии Esc закрыть модальное окно

const handleEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
};

// сообщение об успешной отправке формы

const showSuccessMessage = () => {
  const successMessageElement = templateSuccess.cloneNode(true);
  document.addEventListener('keydown', handleEscKeydown);
  document.addEventListener('click', handleOutside);
  successMessageElement.querySelector('.success__button').addEventListener('click', onErrorButtonClick);
  document.body.append(successMessageElement);
  document.body.style.overflow = 'hidden';
};

// сообщение об ошибке

const showErrorMessage = (text) => {
  const errorMessageElement = templateError.cloneNode(true);
  document.addEventListener('keydown', handleEscKeydown);
  document.addEventListener('click', handleOutside);
  errorMessageElement.querySelector('.error__title').textContent = text;
  errorMessageElement.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  document.body.append(errorMessageElement);
  document.body.style.overflow = 'hidden';
};

// скрыть модальное окно

function hideModal() {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', handleEscKeydown);
  document.removeEventListener('click', handleOutside);
  document.body.style.overflow = 'auto';
}

// при изменении поля загрузки открыть окно редактирования

uploadInput.addEventListener('change', (openOverlayModal));

// при фокусе с клавиатуры открыть окно редактирования

uploadInput.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openOverlayModal();
  }
});

// открытие-закрытие окна редактирования изображения

function openOverlayModal() {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', handleEscKeydown);
  uploadOverlayCancel.addEventListener('click', (closeOverlayModal));
}

function closeOverlayModal() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleEscKeydown);
  uploadOverlayCancel.removeEventListener('click', (closeOverlayModal));
  uploadForm.reset();
  imgUploadPreview.removeAttribute('class');
  resetScale();
  pristine.reset();
}

// прослушка кнопки отправки формы

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Идет публикация...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessMessage();
        },
        (text) => {
          showErrorMessage(text);
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {
  closeOverlayModal,
  showSuccessMessage,
  showErrorMessage,
  onUserFormSubmit
};
