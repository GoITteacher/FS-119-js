/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('Hello');

// setTimeout(() => {
//   console.log('Test');
// }, 5000);

//!======================================================

// console.log('START');

// setTimeout(function () {
//   console.log('HELLO');
// }, 5000);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
//!======================================================

//!======================================================
/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

//!======================================================
// const x1 = setTimeout(() => {
//   console.log('1');
// }, 10000);
// const x2 = setTimeout(() => {
//   console.log('2');
// }, 10000);
// const x3 = setTimeout(() => {
//   console.log('3');
// }, 10000);
// const x4 = setTimeout(() => {
//   console.log('4');
// }, 10000);

// clearTimeout(x3);
//!======================================================
/**
 * Можливість передати параметри для колбеку
 */
//!======================================================
// function test() {
//   const x = 10;
//   setTimeout(() => {
//     console.log(x);
//   }, 1000);
// }

// test();

//!======================================================
// const myCallback = value => {
//   console.log(value);
// };

// function test() {
//   const x = 10;
//   setTimeout(myCallback, 1000, x);
// }

// function test() {
//   const x = 10;

//   setTimeout(() => {
//     myCallback(x);
//   }, 1000);
// }
