// Рандомное число из диапазона

function getRandomInt (min, max) {
  const minArgument = Math.ceil(min);
  const maxArgument = Math.floor(max);
  if (maxArgument <= minArgument || minArgument < 0 || maxArgument < 0 || typeof minArgument !== 'number' || typeof maxArgument !== 'number') {
    return NaN;
  } else {return Math.floor(Math.random() * ((maxArgument - minArgument + 1)) + minArgument);}
}

getRandomInt (1, 140);

// Проверка максимальной длины строки

function checkStringLength(currentString, maxLength) {
  return currentString.length <= maxLength;
}

checkStringLength ('Функция для проверки максимальной длины строки', 140);

