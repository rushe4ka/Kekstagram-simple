// Рандомное число из диапазона

function getRandomInt (min, max) {
  if (max <= min || min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  } else {return Math.floor(Math.random() * ((max - min + 1)) + min);}
}

getRandomInt (1, 140);

// Проверка максимальной длины строки

function checkStringLength(currentString, maxLength) {
  return currentString.length <= maxLength;
}

checkStringLength ('Функция для проверки максимальной длины строки', 140);

