import { getRandomPositiveInteger, getRandomArrayElement } from './util.js';

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

const getPictureDescriptions = () => Array.from({length: PICTURES_COUNT}, userDescription);

export {getPictureDescriptions};
