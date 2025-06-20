/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */
//!======================================================
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: true },
];

// for (const friend of friends) {
//   console.log(friend.name);
// }

//!======================================================

/**
 * Пошук друга за іменем
 */

// function findFriendByName(allFriends, friendName) {
//   for (const item of allFriends) {
//     if (item.name === friendName) {
//       return item;
//     }
//   }
// }

// console.log(findFriendByName(friends, 'Mango'));
// console.log(findFriendByName(friends, 'Chelsy'));

//!======================================================
/**
 * Отримуємо імена всіх лрузів
 */
// function getAllNames(allFriends) {
//   const arr = [];

//   for (const item of allFriends) {
//     arr.push(item.name);
//   }

//   return arr;
// }

// console.log(getAllNames(friends));

//!======================================================
/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
// function getOnlineFriends(allFriends) {
//   const arr = [];

//   for (const item of allFriends) {
//     if (item.online) {
//       arr.push(item.name);
//     }
//   }

//   return arr;
// }

// console.log(getOnlineFriends(friends));

//!======================================================

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];
//!======================================================

// function getTotalPrice(stones) {
//   let total = 0;

//   for (const item of stones) {
//     total += item.price * item.quantity;
//   }

//   return total;
// }

// console.log(getTotalPrice(stones));

//!======================================================
// function calcTotalPrice(stones, stoneName) {
//   for (const item of stones) {
//     if (item.name === stoneName) {
//       return item.price * item.quantity;
//     }
//   }

//   return 0;
// }

// console.log(calcTotalPrice(stones, 'Діамант'));
// console.log(calcTotalPrice(stones, 'Цемент'));
