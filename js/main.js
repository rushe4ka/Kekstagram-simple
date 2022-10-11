// Рандомное число из диапазона

// Вообще не поняла как нужно было догадаться какая операция выдаст мне рандомное число. Поэтому просто скопировала все из MDN. Не понимаю как это работает

const getRandomInt = function (min, max) { // Задала имя функции, записала ее в переменную, минимальное и максимальное значение - это параметры
  min = Math.ceil(min);
  max = Math.floor(max);
  Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются в расчет
};

getRandomInt (1, 158);

// Проверка максимальной длины строки


const line = 'Хочешь еще этих мягких булочек';

const checkCommentLength = function (minLength, maxLength) {

  if (line.length > minLength && line.length < maxLength) {

    const number = line.length;
    // console.log ('Спасибо за ваше мнение');
    return number;
  }

  // if (line.length < minLength {

  //   const number = line.length;
  //   console.log ('Комментарий слишком короткий');
  // }

  // if (line.length > maxLength {

  //   const number = line.length;
  //   console.log ('Комментарий слишком длинный');
  // }
};

checkCommentLength (20, 140);

