/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

//!======================================================
// const superUsername = 'Jacob Mercer';
// const copy = superUsername.slice(-5, -2);
// console.log(copy);

// const superUserMail = 'HellosuperUser@gmail.com';
// const nickname = superUserMail.slice(0, -10);
// console.log(nickname);
//!======================================================

// const superUserMail = prompt('Enter your mail:');
// const updatedsuperUserMail = superUserMail.toLowerCase();
// const updatedsuperUserMail = superUserMail.toUpperCase();

// console.log(superUserMail);
// console.log(updatedsuperUserMail);

//!======================================================

// const superUserMail = 'testsuperUser@mail.RU'.toLowerCase();

// if (!superUserMail.includes('.ru')) {
//   console.log('Раді вітати на нашому сайті');
// } else {
//   console.log('Геть звідси розбійник!');
// }

//!======================================================

// const superUserMail = 'ruslan_kudlay@gmail.com';
// const superUserMail = 'ruslan_kudlay@mail.ru';

// const isInvalidsuperUserMail = superUserMail.endsWith('ru');

// if (isInvalidsuperUserMail) {
//   console.log('Геть звідси розбійник!');
// } else {
//   console.log('Раді вітати на нашому сайті');
// }

//!======================================================

// const nickname = '1@volodka';

// const isValidNickname = nickname.startsWith('@');

// if (isValidNickname) {
//   console.log('Nickname has been updated');
// } else {
//   console.log('Нікнейм не відповідає вимогам');
// }

//!======================================================

// const fullName = 'Ruslan Kudlay';
// const spaceIndex = fullName.indexOf(' ');
// const firstname = fullName.slice(0, spaceIndex);
// const lastname = fullName.slice(spaceIndex + 1);
// console.log(firstname);
// console.log(lastname);

// const superUserMail = prompt('Enter your mail:');
// const index = superUserMail.indexOf('@');
// const domen = superUserMail.slice(index);
// console.log(superUserMail);
// console.log(domen);

//!======================================================

// let superUserMessage = '    Hello world       ';
// superUserMessage = superUserMessage.trim();
// console.log(superUserMessage);

//!======================================================

// const text = 'Hello -- superUser -- world -- test';
// const text2 = text.replaceAll('--', '-');
// console.log(text2);

//!======================================================

// const day = prompt('Enter day');
// const month = prompt('Enter month');
// const year = prompt('Enter year');

// const d1 = day.padStart(2, '0');
// const m1 = month.padStart(2, '0');

// console.log(`${d1}.${m1}.${y1}`);

//!======================================================

// const userPassword = prompt('Enter password');
// const hello5 = '*'.repeat(userPassword.length);
// console.log(hello5);

//!======================================================
