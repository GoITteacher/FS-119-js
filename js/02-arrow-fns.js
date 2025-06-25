/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//!======================================================
// const task1 = (x1, x2, x3, x4) => {
//   console.log('Hello T');
//   console.log('Hello T');
//   console.log('Hello T');
//   console.log('Hello T');
//   console.log('Hello T');
//   console.log('Hello T');
//   console.log('Hello T');
//   return x1 + x2 + x3;
// };
//!======================================================

// const task2 = x1 => {
//   console.log(x1);
//   return x1 * 2;
// };

// const sum = (x1, x2) => {
//   return x1 + x2;
// };

// const sum = (x1, x2) => x1 + x2;
// const getDomain = email => email.slice(0, -10);

// console.log(getDomain('test@gmail.com'));
// console.log(getDomain('awdfshdaw@gmail.com'));

//!======================================================

// const task3 = (...args) => {
//   console.log(args);
// };

// task3(1, 2, 3, 4);

//!======================================================
// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

//!======================================================

// const getArea = r => Math.PI * r ** 2;
// console.log(getArea(25));

//!======================================================

// function fnA() {
//   return {
//     a: 5,
//   };
// }

// const fnB = () => {
//   return {
//     a: 5,
//   };
// };

// const fnC = () => ({
//   a: 5,
// });

//!======================================================
// console.log(fnA());

// const arrowFnA =

// console.log(arrowFnA());

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(2, 3, (x, y) => x + y);

// calc(10, 8, (x, y) => x - y);
