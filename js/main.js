// Проверка максимальной длины строки

// function checkStringLength (string, length) {
//   return string.length <= length;
// }

// checkStringLength ( );

// Рандомное число из диапазона

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {

  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Получить рандомный элемент массива

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// =============================
const DESCRIPTIONS = [
  'Котики',
  'Щеночки',
  'Бабочки',
  'Лето',
  'Зима',
  'Милахи',
  'Мой завтрак',
  'Мир прекрасен',
];

const PICTURES_COUNT = 25;
let idCount = 1;

const userDescription = () => {
  const newId = idCount++;

  return {
    id: newId,
    url: `photos/${newId}.jpg`,
    description: `${getRandomArrayElement(DESCRIPTIONS)}`,
    likes: getRandomPositiveInteger (15, 200),
    comments: getRandomPositiveInteger (0, 200)
  };
};

const pictureDescriptions = Array.from({length: PICTURES_COUNT}, userDescription);
