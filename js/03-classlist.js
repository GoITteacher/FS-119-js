/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */
//!======================================================
// const ulElem = document.querySelector('.js-list');
// const liElems = ulElem.querySelectorAll('li');
// const liElems = [...ulElem.children];

// for (const liElem of liElems) {
//   const text = liElem.textContent;
//   const len = text.length;
//   console.log(text, len);
//   if (len > 3) {
//     liElem.classList.add('active-item');
//   }
// }

// for (let i = 0; i < liElems.length; i += 2) {
//   liElems[i].classList.add('active-item');
// }
//!======================================================

// const activeElem = document.querySelector('li');
// console.log(activeElem);
// activeElem.classList.replace('positive', 'negative');

//!======================================================

// const liElem = document.querySelector('li');
// const resultElem = document.querySelector('.js-result');

// if (liElem.classList.contains('active-elem')) {
//   resultElem.textContent = 'Це моя перша мова програмування';
// }

//!======================================================
/*
 * Інтерфейс style
 */

// const ulElem = document.querySelector('ul');

// let width = 100;
// let fontSize = 10;

// for (const liElem of ulElem.children) {
//   liElem.style.width = `${width}px`;
//   liElem.style.backgroundColor = `red`;
//   liElem.style.border = '1px solid white';
//   liElem.style.fontSize = `${fontSize++}px`;
//   width += 30;
// }
