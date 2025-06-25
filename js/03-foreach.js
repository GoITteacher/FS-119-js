/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */
//!======================================================

// const numbers = [5, 10, 15, 20, 25];

// const test = (number, idx, arr) => {
//   console.log(idx, number);
// };

// numbers.forEach(test);

//!======================================================
// const numbers = [2, 5, 6, 4, 2];
// const res = [];

// numbers.forEach(function test(el, idx) {
//   res.push(el * idx);
// });

// console.log(res);

//!======================================================

/* 
  test(5, 0, numbers);
  test(10, 1, numbers);
  test(15, 2, numbers)
  test(20, 3, numbers)
  test(25, 4, numbers)
*/

//!======================================================

// const numbers = [2, 5, 6, 4, 2];

// numbers.forEach((el, idx) => {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

//!======================================================
// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// console.log(total);
//!======================================================
/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

function logItems(items) {
  console.log(items);
  items.forEach((elem, idx) => {
    console.log(`${idx + 1} - ${elem}`);
  });
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
//!======================================================
/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  nameList.forEach((elem, i) => {
    console.log(`${elem}: ${phoneList[i]}`);
  });
}

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
//!======================================================
// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

function calculateAverage(...args) {
  let total = 0;

  args.forEach(el => {
    total += el;
  });

  return total / args.length;
}

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
