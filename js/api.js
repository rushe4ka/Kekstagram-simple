// окно предупреждения об ошибке получения данных с сервера

const alertMessage = 'Не удалось отправить форму. Попробуйте ещё раз';

// получаем список картинок с сервера

const getData = (onSuccess, onFail) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple/data'
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
    'https://27.javascript.pages.academy/kekstagram-simple',
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
