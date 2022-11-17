const pictures = document.querySelector('.pictures'); // поле для картинок
const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture'); // элемент с образцом разметки

const renderPicturesList = (usersPictures) => {
  const usersPicturesFragment = document.createDocumentFragment();

  usersPictures.forEach(({ url, comments, likes }) => {
    const pictureElement = templatePicture.cloneNode(true); // клонирую образец разметки

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    usersPicturesFragment.appendChild(pictureElement); // добавляю картинку в фрагмент
  });

  pictures.appendChild(usersPicturesFragment);
};

export { renderPicturesList };
