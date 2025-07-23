//!======================================================
// JSON - WINRAR
// JSON.stringify() - заархівувати
// JSON.parse() - розархівувати

// const data = [25, 22, true];
// console.log(data);
// const zip = JSON.stringify(data);// "[25, 22, true]"
// console.log(zip);
// const data2 = JSON.parse(zip);
// console.log(data2);

//!======================================================

// const user = {
//   name: 'Vasya',
//   age: 25,
//   showInfo() {
//     console.log('Hello');
//   },
//   city: undefined,
//   colors: ['red', undefined, 'green'],
// };

// const objStr = JSON.stringify(user);

// console.log(objStr);

//!======================================================

// const userData = prompt('Enter json: ');

// const info = JSON.parse(userData);

// console.log(info);

//!======================================================
/**
 * LocalStorage
 */

// console.log(localStorage.name);
// console.log(localStorage.age);
// console.log(localStorage.arr);

// localStorage.setItem('balance', 250);

//!======================================================
/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// const user = { name: 'Vasya' };
// const strUser = JSON.stringify(user);
// localStorage.setItem('user', strUser);

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// const jsonDATA = localStorage.getItem('user'); // завжди буде рядок

// console.log(jsonDATA);

// const userObj = JSON.parse(jsonDATA);

// console.log(userObj);

//!======================================================

/**
 * Видалення
 */

// localStorage.removeItem('user');
// localStorage.clear();

//!======================================================
//? ERRORS

// try {
//   const userJsonInfo = prompt('Enter your info (json)');
//   const userInfo = JSON.parse(userJsonInfo);
//   console.log(userInfo);
// } catch (err) {
//   console.log(err);
// }

// console.log('The end');

//!======================================================

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

// saveToLS('user1', { name: 'Vasya' });
// saveToLS('user2', { name: 'Vasya' });
// saveToLS('user3', { name: 'Vasya' });
// saveToLS('user4', { name: 'Vasya' });

//!======================================================

function getFromLS(key, defaultValue) {
  const jsonData = localStorage.getItem(key);
  try {
    const data = JSON.parse(jsonData);
    return data;
  } catch {
    console.log('ERROR PARSING');
    return defaultValue || jsonData;
  }
}

// const user1 = getFromLS('user1', { name: 'Anonym' });

// console.log(user1);

//!======================================================

const colorElem = document.querySelector('.js-color');

console.log(colorElem);

colorElem.addEventListener('input', e => {
  const newColor = e.target.value;
  document.body.style.backgroundColor = newColor;
  saveToLS('bodyColor', newColor);
});

document.addEventListener('DOMContentLoaded', () => {
  const color = getFromLS('bodyColor', 'white');
  document.body.style.backgroundColor = color;
  colorElem.value = color;
});
