/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */
//!======================================================

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const i in feedback) {
//   console.log(i);
// }

// console.log(totalFeedback);

//!======================================================

// const objA = {
//   x1: 10,
//   x2: 20,
//   x3: 30,
// };

// const objB = {
//   y1: 10,
//   y2: 20,
//   y3: 30,
//   y4: 40,
//   test: 'Hello',
//   _hello: 'Helloworld',
// };

// for (const i in objB) {
//   console.log(i);
// }

//!======================================================

const feedback = {
  bad: 3,
  good: 5,
  neutral: 10,
};

// const arr1 = Object.keys(feedback);
// const arr2 = Object.values(feedback);
// const arr3 = Object.entries(feedback);

//!======================================================
// let total = 0;

// const values = Object.values(feedback);

// for (const item of values) {
//   total += item;
// }
// console.log(total);

//!======================================================

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   feedback[key] += 5;
// }

// console.log(feedback);

//!======================================================

// const products = {
//   'Iphone 16': 1200,
//   'MacBook Air': 2300,
//   Canon: 2500,
//   PS5: 3000,
// };
// const keys = Object.keys(products);

// console.log(keys);

// for (const i of keys) {
//   products[i] += 50;
// }

// console.log(products);

//!======================================================
// const values = Object.values(products);

// console.log(values);

// for (const item of values) {
//   console.log(item);
// }

const arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
  arr[i] += 50;
}
