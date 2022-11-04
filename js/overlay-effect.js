const effectsList = document.querySelector('.effects__list');
// const effects = Array.from(document.querySelectorAll('[name=effect]'));
const imgUploadPreview = document.querySelector('.img-upload__preview');

// const EFFECTS = [
//   'none',
//   'chrome',
//   'sepia',
//   'marvin',
//   'phobos',
//   'heat',
// ];


// отслеживать клики по любому пункту списка

function onEffectChange (evt) {
  if (evt.target.value === 'none') {
    imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
  } else {
    imgUploadPreview.classList.remove(`effects__preview--${evt.target.value}`);
  }

  if (evt.target.value === 'chrome') {
    imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
  } else {
    imgUploadPreview.classList.remove(`effects__preview--${evt.target.value}`);
  }

  if (evt.target.value === 'sepia') {
    imgUploadPreview.classList.add('effects__preview--sepia');
  } else {
    imgUploadPreview.classList.remove('effects__preview--sepia');
  }

  if (evt.target.value === 'marvin') {
    imgUploadPreview.classList.add('effects__preview--marvin');
  } else {
    imgUploadPreview.classList.remove('effects__preview--marvin');
  }

  if (evt.target.value === 'phobos') {
    imgUploadPreview.classList.add('effects__preview--phobos');
  } else {
    imgUploadPreview.classList.remove('effects__preview--phobos');
  }

  if (evt.target.value === 'heat') {
    imgUploadPreview.classList.add('effects__preview--heat');
  } else {
    imgUploadPreview.classList.remove('effects__preview--heat');
  }
}

effectsList.addEventListener('change', onEffectChange);
