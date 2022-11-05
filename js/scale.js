import { toNumber } from './util.js';
import { removeLastChar } from './util.js';

const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const maxScale = 100;
const minScale = 25;
const step = 25;

scaleControlSmaller.addEventListener('click', () => {
  const currentValue = scaleControlValue.value;
  const numberValue = toNumber(removeLastChar(currentValue));

  if (numberValue > minScale && numberValue < maxScale) {
    const newValue = numberValue - step;

    scaleControlValue.value = `${newValue}%`;
    imgUploadPreview.style.transform = `scale(0.${newValue})`;
  }
});

scaleControlBigger.addEventListener('click', () => {
  const currentValue = scaleControlValue.value;
  const numberValue = toNumber(removeLastChar(currentValue));

  if (numberValue > minScale && numberValue < maxScale) {
    const newValue = numberValue + step;

    scaleControlValue.value = `${newValue}%`;
    imgUploadPreview.style.transform = `scale(0.${newValue})`;
  }
});
