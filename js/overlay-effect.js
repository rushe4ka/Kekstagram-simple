const effectsList = document.querySelector('.effects__list');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

// отслеживать клики по любому пункту списка

effectsList.addEventListener ('click', (evt) => {
  imgUploadPreview.className = (`effects__preview--${evt.target.value}`);
});
