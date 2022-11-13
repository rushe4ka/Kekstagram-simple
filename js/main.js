import './overlay-effect.js';
import './scale.js';

import { closeOverlayModal } from './modals.js';
import { setUserFormSubmit } from './form.js';
import { getData } from './api.js';
import { renderPicturesList } from './create-miniatures.js';

getData ((data) => {
  renderPicturesList(data);
});

// закрываем окно редактирования при отправке формы

setUserFormSubmit(closeOverlayModal);
