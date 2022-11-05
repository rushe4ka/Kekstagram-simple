const effectsList = document.querySelector('.effects__list');
const imgUploadPreview = document.querySelector('.img-upload__preview');

// отслеживать клики по любому пункту списка

effectsList.addEventListener ('focusin', (evt) => {
  imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
});

effectsList.addEventListener ('focusout', (evt) => {
  imgUploadPreview.classList.remove(`effects__preview--${evt.target.value}`);
});
