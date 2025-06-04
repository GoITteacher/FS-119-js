/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false

// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false

// console.log(Boolean(25)); // true
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean('hello')); // true
// console.log(Boolean('false')); // true

//!======================================================

// AND - && - повертає перше значення false, в іншому випадку повертає останнє значення

// 'Salary' && 'Coffe' && false;

// '' && 'Coffe' && 'Vocation'

//!======================================================

// OR - || - повертає перше значення true, в іншому випадку повертає останнє значення

// false || true || false || false;

//!======================================================

// console.log(5 && 4);
// console.log(5 && 'mango');

// /**
//  * --------------------------------
//  */

// console.log(false || 5);
// console.log(false || null);

// /**
//  * --------------------------------
//  */

// console.log(!5);
// console.log(!false);

// /**
//  * --------------------------------
//  */

//? AND - && - повертає перше значення false, в іншому випадку повертає останнє значення

//? OR - || - повертає перше значення true, в іншому випадку повертає останнє значення

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi'); // 'kiwi'

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3); // t

// console.log(true || 3 || 4); // t

// console.log(true || false || 7); //t

// console.log(null || 2 || undefined); //2

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

//!======================================================

// const userValue = prompt('EnterName');
// const userName = userValue || 'Anonym';

// const message = `Hello ${userName}`;

// console.log(message);

//!======================================================

/* 
true = 1
false = 0;
&& = *
|| = +
*/

//!======================================================
const userAge = 18;
const userBalance = 1000;
const userType = 'Anonym';

const isAdult = userAge > 18;
const isPositiveBalance = userBalance > 100;
const isAdmin = userType !== 'Admin';
const isValidUser = !((isAdult && isPositiveBalance) || isAdmin);

if (!isValidUser) {
  console.log('');
}

//!======================================================
