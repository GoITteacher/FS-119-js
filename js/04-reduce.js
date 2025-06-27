/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */
//!======================================================

// const arr = [5, 8, 2, 4];

// const res = arr.reduce((acc, el, idx, arr) => {
//   return acc + el;
// });

// const res = arr.reduce((acc, el, idx, arr) => {
//   if (el % 2 === 0) {
//     acc.push(el);
//   }

//   return acc;
// }, []);
// console.log(res);

//!======================================================

// const arr = [
//   { x: 10, y: 20 },
//   { q: 10, t: 20 },
//   { w: 10, y: 20 },
//   { h: 10, r: 20 },
// ];

// const res = arr.reduce((acc, el) => {
//   return { ...acc, ...el };
// }, {});

// console.log(res);

//!======================================================
// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((acc, el) => {
//   return acc * el;
// });

// console.log(total);

/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce((acc, el) => {
  return acc + el;
});
console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce((total, player) => {
  return total + player.timePlayed;
}, 0);
console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((total, product) => {
//   return total + product.price * product.quantity;
// }, 0);
// console.log(totalAmount);
