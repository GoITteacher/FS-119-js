/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

// const date1 = new Date();
// const date2 = new Date('2025');
// const date3 = new Date('2025-07');
// const date4 = new Date('2025-07-01 14:10:10');
// const date5 = new Date('01/01/2025');
// const date6 = new Date('01.01.2022');
// const date7 = new Date(-124345);

// console.log(date7.toISOString());

//!======================================================
// const date1 = new Date('2025-07-01 14:10:10');
// const date2 = new Date('2025-07-01 14:10:25');

// console.log(date2 - date1);

//!======================================================

// const date1 = Date.now();
// console.log("date1", date1);

//!======================================================
// const date = new Date('2025-03-25 14:10:25');

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.toISOString());
// console.log(date.getTime());

// date.setMonth(date.getMonth() + 22);
// date.setDate(date.getDate() + 7);
// date.setTime(0);

// console.log(date.toISOString());

//!======================================================
// const date = new Date('2025-01-01 00:05:25');

// date.getUTCFullYear();

// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getUTCFullYear());
// console.log(date.getMonth());
// console.log(date.getUTCMonth());
// console.log(date.getHours());
// console.log(date.getUTCHours());

//!======================================================

const initDate = new Date();

setInterval(() => {
  const diff = Date.now() - initDate;
  console.log(diff);
}, 1000);
