/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// function createPromise(value, delay, isActive) {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (isActive) {
//         res(value);
//       } else {
//         rej(value);
//       }
//     }, delay);
//   });
//   return promise;
// }

// const p1 = createPromise('Promise №1', 1000, true);
// const p2 = createPromise('Promise №2', 100, false);
// const p3 = createPromise('Promise №3', 600, true);
// const p4 = createPromise('Promise №4', 200, false);
// const p5 = createPromise('Promise №5', 500, true);

// function onFulfilled(res) {
//   console.log('✅', res);
// }
// function onRejected(res) {
//   console.log('❌', res);
// }

// p1.then(onFulfilled).catch(onRejected);
// p2.then(onFulfilled).catch(onRejected);
// p3.then(onFulfilled).catch(onRejected);
// p4.then(onFulfilled).catch(onRejected);
// p5.then(onFulfilled).catch(onRejected);

//!======================================================

// const promise1 = fetch('https://pokeapi.co/api/v2/pokemon/ditto');

// promise1
//   .then(res => {
//     console.log(res);
//   })
//   .catch(() => {
//     console.log('ERROR');
//   });

// console.log(promise1);

//!======================================================
/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function filterArr(arr) {
// const filteredArr = arr.filter(el => el > 5);
// const arrPromise = Promise.resolve(filteredArr);
// const arrPromise = Promise.reject(filteredArr);
// return arrPromise;
// }

// const res = filterArr([1, 2, 6, 9, 6, 3, 45, 7, 9, 67, 4, 32, 4, 6, 8]);

// console.log(res);

//!======================================================
// function createPromise(value, delay, isActive) {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (isActive) {
//         res(value);
//       } else {
//         rej(value);
//       }
//     }, delay);
//   });
//   return promise;
// }

// const p1 = createPromise('Promise №1', 1000, true);
// const p2 = createPromise('Promise №2', 100, false);
// const p3 = createPromise('Promise №3', 600, true);
// const p4 = createPromise('Promise №4', 200, false);
// const p5 = createPromise('Promise №5', 500, true);
// const p6 = createPromise('Promise №6', 300, false);
// const p7 = createPromise('Promise №7', 700, true);

// const promises = [p1, p2, p3, p4, p5, p6, p7];

// Promise.all(promises)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Promise.allSettled(promises).then(res => {
//   console.log(res);
// });

// Promise.race(promises)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
