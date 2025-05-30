/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

//!======================================================

// const x = Number('55$');

// console.log(x);

//!======================================================

// const x = parseInt('5.5');
// console.log(x);

// const x = parseFloat('22.56.28');
// console.log(x);

//!======================================================

// Math.PI

//!======================================================

// const max = Math.max(10, 4, 6, 1, 4, 6, 8, 8, 4, 23, 1);
// console.log(max);

//!======================================================
let elementWidth = parseInt('50px');
console.log('elementWidth: ', elementWidth);

let elementHeight = parseInt('200.74px');
console.log('elementHeight: ', elementHeight);

//!======================================================
/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

const value = 27.4;
console.log(Math.ceil(value));
console.log(Math.floor(value));
console.log(Math.round(value));
