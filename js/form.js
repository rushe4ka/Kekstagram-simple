import { showAlert } from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const comment = uploadForm.querySelector('.text__description');
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

const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      const formData = new FormData(evt.target);

      fetch(
        'https://27.javascript.pages.academy/kekstagram-simple',
        {
          method: 'POST',
          body: formData,
        }
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
          } else {
            showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          }
        })
        .catch(() => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        });
    }
  });
};

export { setUserFormSubmit };
