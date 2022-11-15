const errorMessage = 'Ошибка загрузки данных';
const serverGetDataUrl = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const serverSendDataUrl = 'https://27.javascript.pages.academy/kekstagram-simple';

// получаем список картинок с сервера

const getData = (onSuccess, onFail) => {
  fetch(serverGetDataUrl)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail(errorMessage);
    });
};

// отправляем форму на сервер

const sendData = (onSuccess, onFail, body) => {
  fetch(
    serverSendDataUrl,
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(errorMessage);
      }
    })
    .catch(() => {
      onFail(errorMessage);
    });
};

export { getData, sendData };
