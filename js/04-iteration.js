/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */
//!======================================================
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let i = 0; i < friends.length; i++) {
//   const currentElem = friends[i];
//   console.log(currentElem);
// }

// for (let i = 0; i < friends.length; i += 2) {
//   const element = friends[i];
//   console.log(element);
// }

//!======================================================

// const arr = [400, 600, 550, 800];

// let total = 0;

// for (let i = 0; i < arr.length; i++) {
//   arr[i] += 100;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     arr[i] += 100;
//   }
// }

// console.log(arr);

// for (let item of arr) {
//   item+=100;
// }

// console.log(total);

//!======================================================
/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */
//!======================================================
const values = '8 11';
const arr = values.split(' ');
const width = +arr[0];
const height = +arr[1];
const area = width * height;
//!======================================================

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i++) {
//   const str = `${i + 1}: ${fruits[i]}`;
//   console.log(str);
// }
