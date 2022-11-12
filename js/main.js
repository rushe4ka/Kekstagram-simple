import './overlay-effect.js';
import './scale.js';

import { renderPicturesList } from './create-miniatures.js';
import { closeOverlayModal } from './overlay-modal.js';
import { setUserFormSubmit } from './form.js';

// получаем список картинок с сервера

fetch(
  'https://27.javascript.pages.academy/kekstagram-simple/data'
)
  .then((response) => response.json())
  .then((data) => {
    renderPicturesList(data);
  });

// закрываем окно редактирования при отправке формы

setUserFormSubmit(closeOverlayModal);
