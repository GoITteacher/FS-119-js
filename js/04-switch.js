/**
 * Оператор switch
 */
//!======================================================

const username = 'Mango';

// switch (username) {
//   case 'Vasya':
//     console.log('Hello1');
//     console.log('Hello1');
//     console.log('Hello1');
//     console.log('Hello1');
//     break;

//   case 'Anton':
//     console.log('Hello2');
//     console.log('Hello2');
//     console.log('Hello2');
//     console.log('Hello2');
//     break;

//   case 'Roman':
//     console.log('Hello3');
//     console.log('Hello3');
//     console.log('Hello3');
//     console.log('Hello3');
//     break;

//   case 'Mango':
//     console.log('Hello4');
//     console.log('Hello4');
//     console.log('Hello4');
//     console.log('Hello4');
//     break;
// }

//!======================================================

// const userStatus = 'Admin';

// if (userStatus === 'Admin') {
//   console.log('Hello Admin');
// } else if (userStatus === 'User') {
//   console.log('Hello Admin');
// } else if (userStatus === 'Anonym') {
//   console.log('Goodbye');
// }

// switch (userStatus) {
//   case 'Admin':
//   case 'User':
//     console.log('Hello User');

//   case 'Anonym':
//     console.log('Hello Anonym');
//     break;

//   default:
//     console.log('Goodbye');
//     break;
// }

//!======================================================
/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Today');
//     break;
//   case 1:
//     console.log('Tomorrow');
//     break;
//   case 2:
//     console.log('Overmorrow');
//     break;

//   default:
//     console.log('Date in the future');
//     break;
// }

/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається в змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
 *
 * У змінну message записати повідомлення в залежності від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
 * - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилання буде відправлено сьогодні'
 * - 'Вам передзвонить менеджер'
 */

// function getDeliveryOption(option) {
//   let message;

//   switch (option) {
//     case 1:
//       message = 'Ви зможете забрати товар завтра з 12:00 у нашому офісі';
//       break;
//     case 2:
//       message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//       break;
//     case 3:
//       message = 'Ваше замовлення буде відправлено сьогодні';
//       break;

//     default:
//       message = 'Вам передзвонить менеджер';
//   }

//   return message;
// }

// const msg1 = getDeliveryOption(2);

// console.log(msg1);
