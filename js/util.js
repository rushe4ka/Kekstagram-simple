// Проверка нажатия клавиши Esc, Enter

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

// ============================================ //

// Удалить последний символ в строке

const removeLastChar = (string) => string ? string.slice(0,-1) : string;

// ============================================ //

export {
  isEscapeKey,
  isEnterKey,
  removeLastChar
};
