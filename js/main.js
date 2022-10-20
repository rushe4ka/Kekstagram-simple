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

// 1. id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

const GENERATE_ID = (getRandomPositiveInteger (1, 25));

// 2. url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

const GENERATE_URL = getRandomPositiveInteger (1, 25);

// 3. description, строка — описание фотографии. Описание придумайте самостоятельно.

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

// 4. likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

const GENERATE_LIKES = getRandomPositiveInteger (15, 200);

// 5. comments, число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200.

const GENERATE_COMMENTS = getRandomPositiveInteger (0, 200);


const PICTURES_COUNT = 25;

const userDescription = () => ({
  id: `${getRandomArrayElement(GENERATE_ID)}`,
  url: `photos/${GENERATE_URL}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTIONS)}`,
  likes: GENERATE_LIKES,
  comments: GENERATE_COMMENTS,
});

const pictureDescriptions = Array.from({length: PICTURES_COUNT}, userDescription);

console.log(pictureDescriptions);
