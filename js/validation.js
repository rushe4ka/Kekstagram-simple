const uploadForm = document.querySelector('.img-upload__form');
const comment = uploadForm.querySelector('.text__description');
const MIN_COMMENT_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;

const pristine = new Pristine(
  uploadForm,
  {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text'
  },
  true
);

function validateCommentLength (value) {
  return value.length >= MIN_COMMENT_LENGTH && value.length <= MAX_COMMENT_LENGTH;
}

pristine.addValidator(
  comment,
  validateCommentLength,
  `Длина комментария от ${MIN_COMMENT_LENGTH} до ${MAX_COMMENT_LENGTH} знаков`
);


uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
