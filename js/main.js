import { showErrorMessage } from './form.js';
import { getData } from './api.js';
import { renderPicturesList } from './create-miniatures.js';

getData ((data) => {
  renderPicturesList(data);
}, (text) => {
  showErrorMessage(text);
});
