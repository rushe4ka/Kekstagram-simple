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

export {
  // getRandomPositiveInteger,
  // getRandomArrayElement,
  isEscapeKey,
  isEnterKey,
  toNumber,
  removeLastChar
};
