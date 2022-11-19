const ERROR_GET_DATA_MESSAGE = 'Ошибка загрузки данных';
const ERROR_SEND_DATA_MESSAGE = 'Ошибка загрузки файла';
const SERVER_GET_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SERVER_SEND_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

// получаем список картинок с сервера

const getData = (onSuccess, onFail) => {
  fetch(SERVER_GET_DATA_URL)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail(ERROR_GET_DATA_MESSAGE);
      const errorButton = document.querySelector('.error__button');
      errorButton.addEventListener('click', () => {
        document.location.reload();
      });
    });
};

// отправляем форму на сервер

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER_SEND_DATA_URL,
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(ERROR_SEND_DATA_MESSAGE);
      }
    })
    .catch(() => {
      onFail(ERROR_SEND_DATA_MESSAGE);
    });
};

export { getData, sendData };
