/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

//!======================================================

// const y = function myFun(){};

// function foo(userValue) {
//   console.log(userValue);
// }

// foo(y);

//!======================================================

// function myDay(instruction) {
//   console.log('Прокинутись');
//   console.log('Поснідати');
//   console.log('Піти до школи');
//   console.log('Повернутись зі школи');
//   instruction();
//   console.log('Відпочинок');
// }

// function goToMusicSchool() {
//   console.log('Піти до муз школи');
//   console.log('Повернутись муз школи');
// }

// myDay(goToMusicSchool);

//!======================================================

/**
 * Функція calc(a, b, callback)
 */

// function sum(x, y) {
//   return x + y;
// }
// function sub(x, y) {
//   return x + y;
// }
// function mult(x, y) {
//   return x * y;
// }
// function div(x, y) {
//   return x + y;
// }

// function getArea(x1, x2) {
//   return x1 * 2 + x2 * 2;
// }

// function calc(a, b, callback) {
//   const res = callback(a, b);

//   console.log(`A: ${a}`);
//   console.log(`B: ${b}`);
//   console.log(`RESULT: ${res}`);
// }

//!======================================================

// function foo(x1, x2, x3) {
//   x2();
// }

// foo(
//   10,
//   function () {
//     console.log('Hello world');
//   },
//   true,
// );

//!======================================================

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  const res = [];

  for (let i = 0; i < array.length; i++) {
    const elem = array[i];
    const callbackResult = callback(elem);
    res.push(callbackResult);
  }

  return res;
}

/* 
const res = [];

res.push(task1(array[0]));
res.push(task1(array[0]));
res.push(task1(array[0]));
res.push(task1(array[0]));
res.push(task1(array[0]));



*/

// function task1(elem) {
//   return '!' + elem.toUpperCase();
// }

// const arr = ['javascript', 'css', 'html'];

// console.log(each(arr, task1));

//!======================================================
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  }),
);
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );
