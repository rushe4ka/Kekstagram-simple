import { setUserFormSubmit, closeOverlayModal, showErrorMessage } from './form.js';
import { getData } from './api.js';
import { renderPicturesList } from './create-miniatures.js';

getData ((data) => {
  renderPicturesList(data);
  setUserFormSubmit(closeOverlayModal); // создание обработчика отправки формы
}, (text) => {
  showErrorMessage(text);
});
