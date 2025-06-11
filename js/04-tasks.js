/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

// const a = 10;
// const b = 120;

// for (let i = a; i < b; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
 */

// const min = 0;
// const max = 5;

// function getSum(min, max) {
//   let total = 0;

//   for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }

//   return total;
// }

//!======================================================

// "Як виконати завдання:
// Напиши функцію, яка приймає рядок та повертає перевернутий рядок

function task1(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

// console.log(task1('Hello'));
//!======================================================

// Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у верхньому регістрі"

// function task2(str) {
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }

// console.log(task2('javascript'));

//!======================================================

// "Розкажіть на цьому прикладі шлях мислення і логіку для написання циклу while.
// Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6."

function sum(max) {
  let total = 0;
  let currentNumber = 0;

  while (currentNumber <= max) {
    console.log(`total += ${currentNumber}`);
    total += currentNumber;
    currentNumber++;
  }

  return total;
}

console.log(sum(10));
