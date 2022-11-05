// import { checkStringLength } from './util';

const uploadForm = document.querySelector('.img-upload__form');
const comment = uploadForm.querySelector('text__description');
const minCommentLength = 20;
const maxCommentLength = 140;

const pristine = new Pristine(
  uploadForm,
  {
    classTo: 'text__description',
    errorTextParent: 'text__description',
  },
  true
);

const validateCommentLength = function (value) {
  return value.length >= minCommentLength && value.length <= maxCommentLength;
};

const createValidateCommentError = function () {
  return `Длина комментария от ${minCommentLength} до ${maxCommentLength} знаков`;
};

pristine.addValidator (comment, validateCommentLength, createValidateCommentError);


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  pristine.validate(comment);
});
