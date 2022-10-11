// Рандомное число из диапазона

// Вообще не поняла как нужно было догадаться какая операция выдаст мне рандомное число. Поэтому просто скопировала все из MDN. Не понимаю как это работает

let getRandomInt = function (min, max) { // Задала имя функции, записала ее в переменную, минимальное и максимальное значение - это параметры
  min = Math.ceil(min);
  max = Math.floor(max);
  Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются в расчет
};

getRandomInt (1, 158);

// Проверка максимальной длины строки


let string = 'Хочешь еще этих мягких булочек';

let checkCommentLength = function (minLength, maxLength) {
  console.log(string.length);

  if (string.length > minLength && string.length < maxLength) {
    console.log('да');
  }
};

checkCommentLength (20, 140);

