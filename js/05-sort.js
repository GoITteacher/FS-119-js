/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [9, 1, 6, 2, 3, 21, 434, 76, 3, 236];

// const sorted = numbers.toSorted((b, a) => {
//   return a - b;
// });
// console.log('sorted ', sorted);

const arr = [1, 2, 4, 67, 2, 23, 656, 12, 3467, 112, 332, 12];

// const res = arr.toSorted();

// const letters = ['b', 'B', 'a', 'A'];
// const res = letters.toSorted();
// console.log(res);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   }),
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// const res = players.toSorted((a, b) => {
//   return a.name.localeCompare(b.name);
// });

// console.table(res);

// const res = players.toSorted((b, a) => {
//   return a.timePlayed - b.timePlayed;
// });
// const res = players.toSorted((a, b) => {
//   return a.name.length - b.name.length;
// });

// console.table(res);

// За ігровим часом
// const sortedByBestPlayers = players;
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players;
// console.table(sortedByWorstPlayers);

// // По первой букве имени
// const byName = players;
// console.table(byName);

//!======================================================
