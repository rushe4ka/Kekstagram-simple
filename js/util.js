// Проверка максимальной длины строки

// function checkStringLength (string, length) {
//   return string.length <= length;
// }

// ============================================ //

// Рандомное число из диапазона
// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

// function getRandomPositiveInteger (a, b) {

//   if (a < 0 || b < 0) {
//     return NaN;
//   }

//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));

//   const result = Math.random() * (upper - lower + 1) + lower;

//   return Math.floor(result);
// }

// ============================================ //


// Получить рандомный элемент массива

// const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// ============================================ //

// Проверка нажатия клавиши Esc, Enter

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

// ============================================ //

// Превратить строку в число

const toNumber = (string) => Number(string);

// ============================================ //

// Удалить последний символ в строке

const removeLastChar = (string) => string ? string.slice(0,-1) : string;

// ============================================ //

// окно предупреждения об ошибке отправки формы

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// ============================================ //

export {
  // getRandomPositiveInteger,
  // getRandomArrayElement,
  isEscapeKey,
  isEnterKey,
  toNumber,
  removeLastChar,
  showAlert
};
