// import { checkStringLength } from './util';

const uploadForm = document.querySelector('.img-upload__form');
const comment = uploadForm.querySelector('.text__description');
const minCommentLength = 20;
const maxCommentLength = 140;

const pristine = new Pristine(
  uploadForm,
  {
    classTo: 'text__description',
    errorTextParent: 'text__description',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
  },
  true
);

function validateCommentLength (value) {
  return value.length >= minCommentLength && value.length <= maxCommentLength;
}

pristine.addValidator(
  comment,
  validateCommentLength,
  `Длина комментария от ${minCommentLength} до ${maxCommentLength} знаков`
);


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate(comment);
});
