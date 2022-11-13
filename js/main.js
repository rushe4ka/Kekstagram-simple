import './overlay-effect.js';
import './scale.js';

import { closeOverlayModal } from './overlay-modal.js';
import { setUserFormSubmit } from './form.js';
import { getData } from './api.js';
import { renderPicturesList } from './create-miniatures.js';

// закрываем окно редактирования при отправке формы

getData ((data) => {
  renderPicturesList(data);
});

setUserFormSubmit(closeOverlayModal);
