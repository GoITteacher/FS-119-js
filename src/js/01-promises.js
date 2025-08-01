/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */
//!======================================================

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const isActive = Math.random() > 0.5;
//     if (isActive) {
//       res('Смачного');
//     } else {
//       rej('Вибачте, ми повернемо гроші');
//     }
//   }, 100);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 200);

//!======================================================

// function onFulfilled(value) {
//   console.log('Ням ням ням');
// }

// function onRejected(result) {
//   console.log('Плакі плакі');
// }

// promise.then(onFulfilled, onRejected);

//!======================================================

// promise
//   .then(message => {
//     console.log(message);
//     console.log('Ням ням');
//   })
//   .catch(message => {
//     console.log(message);
//     console.log('ERROR');
//   });

// promise.then(res => {}).catch(err => {});

//!======================================================
// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(20);
//   }, 300);
// });

// promise
//   .then(res => {
//     console.log(1, res);
//     return res * 2;
//   })
//   .then(res => {
//     console.log(2, hello);
//     return res * 2;
//   })
//   .then(res => {
//     console.log(3, res);
//     return res * 2;
//   })
//   .catch(res => {
//     console.log(4, res);
//     return res * 2;
//   })
//   .then(res => {
//     console.log(5, res);
//     return res * 2;
//   })
//   .catch(res => {
//     console.log(7, res);
//     return res * 2;
//   });

//!======================================================

// promise
//   .then(res => {
//     console.log('Ням ням');
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//   })
//   .catch(() => {
//     console.log('Біда біда');
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//   });

// promise
//   .then(res => {
//     console.log('Ням ням');
//   })
//   .catch(() => {
//     console.log('Біда біда');
//   })
//   .finally(() => {
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//     console.log('Іду до кінотеатру');
//   });
