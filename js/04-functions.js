/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

//!======================================================

// function myDay() {
//   console.log('Прокинутись');
//   console.log('Почистити зуби');
//   console.log('Поснідати');
//   console.log('Піти до школи');
//   console.log('Повернутись зі школи');
//   console.log('Уроки');
//   console.log('Відпочинок');
//   console.log('Спати');
// }

// myDay();

//!======================================================

// function buySmth(money) {
//   console.log(`Візьми ${money}$`);
//   console.log('Піди до магазину');
//   console.log(`Купи ${productList}`);
//   console.log('Повернись додому');
//   console.log(`Віддай ${productList}`);
// }

// buySmth(25, 'хліб, ковбаса, сир', 20);

//!======================================================

// function sum(x, y) {
//     // let x = 10;
//     // let y = 20
//   console.log(x + y);
// }

// sum(10, 20);

//!======================================================

// function showUserInfo(userName, userAge, city, hobby) {
//   console.log(`\n\nКористувача звати ${userName}`);
//   console.log(`Йому ${userAge} років`);
//   console.log(`Він з міста ${city}`);
//   console.log(`Він полюбляє ${hobby}`);
// }

// showUserInfo('Антон', 25, 'Львів', 'Music');
// showUserInfo('Роман', 23, 'Дніпро', 'Dance');
//!======================================================
// function parseInt2(str) {
//   console.log('str:', str);
//   const res = Number(str);
//   console.log('res:', res);
//   return 25;
// }

// const x = '25';
// console.log('x:', x);

// const userValue = parseInt2(x);
// console.log(userValue * 2);

//!======================================================

// function foo() {
//   return 25;
// }

// const res = (foo() + foo()) / 10;

// console.log(res);

//!======================================================

// function task1(r) {
//   const area = Math.PI * r ** 2;
//   const len = 2 * Math.PI * r;
//   const res = area + len;
//   return res;
// }

// function spam() {
//   alert('Hello User');
// }

// spam();

//!======================================================

function sum(x, y) {
  return x + y;
}

console.log(sum(10, 20));

//!======================================================

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8
