// Рандомное число из диапазона

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const randomNumber = Math.random();
  const result = randomNumber * (upper - lower + 1) + lower;
  const resultFloor = Math.floor(result);
  return resultFloor;
}

getRandomPositiveInteger (1, 158);

// Проверка максимальной длины строки

function checkStringLength(currentString, maxLength) {
  return currentString.length <= maxLength;
}

checkStringLength ('Функция для проверки максимальной длины строки', 140);

