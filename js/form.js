import { showErrorMessage, showSuccessMessage } from './modals.js';
import { sendData } from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const comment = uploadForm.querySelector('.text__description');
const submitButton = uploadForm.querySelector('#upload-submit');
const MIN_COMMENT_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;

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

function validateCommentLength (value) {
  return value.length >= MIN_COMMENT_LENGTH && value.length <= MAX_COMMENT_LENGTH;
}

pristine.addValidator(
  comment,
  validateCommentLength,
  `Длина комментария от ${MIN_COMMENT_LENGTH} до ${MAX_COMMENT_LENGTH} знаков`
);

// прослушка кнопки отправки формы

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Идет публикация...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
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
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { setUserFormSubmit };
