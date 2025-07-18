/**
 * Деструктуризація об'єкта
 */
//!======================================================
// const user = {
//   username: 'Jacob name',
//   age: 10,
//   address: 'Test',
//   city: 'Dnipro',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { username, age, address, city } = user;
// const username = user.username;
// const age = user.age;
// const address = user.address;
// const city = user.city;

//!======================================================
/**
 * Глибока деструктуризація об'єкта
 */

// const username = 'Vasya';

// const user = {
//   username: 'Jacob name',
//   age: 10,
//   address: {
//     location: {
//       x: 100,
//       y: 200,
//     },
//   },
//   city: 'Dnipro',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { username: myName } = user;
// const myName = user.username
//!======================================================
// const {
//   username: name,
//   skills: { html, css, js },
//   age,
// } = user;
// const {html, css, js} = user.skills;

// const {
//   address: {
//     location: { x, y },
//   },
// } = user;

// console.log("html", html);
// console.log("css", css);
// console.log("js", js);
//!======================================================

// const userInfo = {
//   username: 'Roman',
//   age: 25,
// };

// const { username = 'Anonym' } = userInfo;
// const username = unefined || 'Anonym';

//!======================================================
// const userInfo = {
//   username: 'Roman',
//   age: 25,
// };

// const { username: name = 'Anonym', age: myAge = 0, address } = userInfo;

//!======================================================
// const user = {
//   age: 10,
//   address: {
//     location: {
//       x: 100,
//       y: 200,
//     },
//   },
//   city: 'Dnipro',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   username: 'Jacob name',
// };

// console.log(user);

// console.log(user.address);

// const { address, skills, ...newUser } = user;

// console.log(newUser);

// const { username, city, city: city1 } = user;
// const {city, username} = user;

// const city = user.city;
// const username = user.username;
//!======================================================
/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5];
// const [x1, x2, x3] = arr;

// const rgb = [250, 110, 15, 0.5];
// const [red, , blue] = rgb;

// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];
//!======================================================

// const arr = [25, 4, 56, 3, 1, 2, 4, 6, 8, 5, 3, 2, 46, 8];

// const [max, min, ...numbers] = arr;

// console.log(max);

//!======================================================

// let x = 10;
// let y = 20;
// [y, x] = [x, y];

// let x = 10;
// let y = 20;
// let tmp = x;
// x = y;
// y = tmp;

//!======================================================

// const arr = [10, 20];
// const [x1 + 1,x2] = arr
//!======================================================
// let [x1, x2, x3, x4, x5] = [10, 20, 30, 40, 50];

// let x1 = 10;
// let x2 = 20;
// let x3 = 20;
// let x4 = 20;
// let x5 = 20;

// console.log(x1, y1);
