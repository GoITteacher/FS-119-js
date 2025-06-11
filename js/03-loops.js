/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Зворотній відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

// debugger;

// for (let i = 1; i <= 5; i += 1) {
//   console.log('Пройтись по рядочку', i);
// }

// console.log();

//!======================================================
// for (let x = 10; x >= 0; x -= 1) {
//   console.log(x);
// }

//!======================================================

// const str = 'Hello';
// for (let x = str.length - 1; x >= 0; x -=2) {
//   console.log('hello');
// }

//!======================================================

// const str = 'Hello world';

// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]);
// }

//!======================================================

// for (let i = 0; i < 10; i += 0.01) {
//   console.log(i.toFixed(2));
// }

//!======================================================

// i+=1;
// i-=1;

// i++;
// i--;
// let i = 2;

// for(let i =0;i <10;++i){
// }

//!======================================================

// let password;

// while (password !== 'hello') {
//   console.log('Неправильний пароль');
//   password = prompt('Enter password');
// }

// console.log('Ласкаво просимо');

//!======================================================

// let salary = 10000;
// const mySalary = 2000;

// for (let i = 0; i < 3; i++) {
//   console.log('\nА можна мені підняти ЗП?');
//   salary += Math.round(Math.random() * 500);
//   console.log(`Тепер ваша зп = ${salary}`);
// }

// while (salary < mySalary) {
//   console.log('\nА можна мені підняти ЗП?');
//   salary += Math.round(Math.random() * 500);
//   console.log(`Тепер ваша зп = ${salary}`);
// }

// do {
//   console.log('\nА можна мені підняти ЗП?');
//   salary += Math.round(Math.random() * 500);
//   console.log(`Тепер ваша зп = ${salary}`);
// } while (salary < mySalary);

// console.log(`Кінцева зп - ${salary}`);

//!======================================================

// const str = 'Hello world awdd! Test User';

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === '!') {
//     break;
//   }

//   console.log(str[i]);
// }

//!======================================================

// for (let i = 0; i < 100; i++) {
//   if (String(i).includes(5)) {
//     continue;
//   }

//   console.log(i);
// }

//!======================================================

// const randomValue = Math.round(Math.random() * 100);//77
// let userValue;//50

// while (+userValue != randomValue) {
//   userValue = prompt('Enter value:');
//   if (userValue > randomValue) {
//     console.log('<');
//   } else {
//     console.log('>');
//   }
// }

// console.log(`Ура, ви вгадали. Рандомне число - ${randomValue}`);
