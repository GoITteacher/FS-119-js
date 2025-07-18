/**
 * Деструктуризація об'єкта в параметрах функції
 */

// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`,
//   );
// }

// З деструктуризацією

// function getUserName(y, { name, skills: { html, css, js } }, x) {
//   console.log(
//     `Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`,
//   );
// }

// getUserName(20, userInfo, 10);

//!======================================================

// function foo(x, y) {}
// foo(10, 20);

// function createUser(
//   name = '',
//   age,
//   height,
//   weight,
//   city,
//   country,
//   isStudent,
//   phoneNumber,
//   gender,
// ) {
//   const obj = {
//     name,
//     age,
//     height,
//     weight,
//     city,
//     country,
//     isStudent,
//     phoneNumber,
//     gender,

//     showInfo() {},
//   };
// }

// createUser('Roman', 65, 160, 66, 'Dnipro', 'Ukraine', false, '9234234', 'Male');

// function createUser2({ name = '', age = 0, city, country, height, weight }) {}

// createUser2({
//   height: 160,
//   name: 20,
//   city: 'Dnipro',
//   country: 'Ukraine',
//   age: 10,
//   weight: 65,
// });

//!======================================================
