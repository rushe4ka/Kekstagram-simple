const alertMessage = 'Не удалось отправить форму. Попробуйте ещё раз';
const serverUrl = 'https://27.javascript.pages.academy/kekstagram-simple/data';

// получаем список картинок с сервера

const getData = (onSuccess, onFail) => {
  fetch(
    serverUrl
  )
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail(showAlert);
    });
};

// отправляем форму на сервер

const sendData = (onSuccess, onFail, body) => {
  fetch(
    serverUrl,
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(alertMessage);
      }
    })
    .catch(() => {
      onFail(alertMessage);
    });
};

export { getData, sendData };
