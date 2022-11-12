import './create-miniatures.js';
import './overlay-modal-open-close.js';
import './overlay-effect.js';
import './validation.js';
import './scale.js';
import './form.js';

import { renderPicturesList } from './create-miniatures.js';

// получаем список картинок с сервера

fetch(
  'https://27.javascript.pages.academy/kekstagram-simple/data'
)
  .then((response) => response.json())
  .then((data) => {
    renderPicturesList(data);
  });
