import './overlay-effect.js';
import './scale.js';

import { closeOverlayModal, showErrorMessage } from './modals.js';
import { setUserFormSubmit } from './form.js';
import { getData } from './api.js';
import { renderPicturesList } from './create-miniatures.js';

const slider = document.querySelector('.effect-level');
const hideSlider = () => {
  slider.classList.add('visually-hidden');
};

getData ((data) => {
  renderPicturesList(data);
  setUserFormSubmit(closeOverlayModal); // создание обработчика отправки формы
  hideSlider();
}, (text) => {
  showErrorMessage(text);
});
