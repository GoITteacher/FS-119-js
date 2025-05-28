/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */
//!======================================================
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;

// const userName = 'Vasya';
// const useAge = 25;

// const message =
//   'Користувачу на імя ' + userName + ' скоро буде ' + (useAge + 1) + '!';

// const message = `Користувачу на імя ${userName} скоро буде ${useAge + 1}!`;

// const message = 'Hello
// world
// test';

// console.log(message);
//!======================================================

// const password = 'rld';

// const len = 'Hello world'.length;

// console.log(len);

//!======================================================

// const nickname = 'hello';

//!======================================================

const quantity = 15;
const orderMsg = `You ordered ${quantity} bots`;
console.log(orderMsg);

const message = `This string is ${orderMsg.length} chars long`;
console.log(message);
//!======================================================
/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;

const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
