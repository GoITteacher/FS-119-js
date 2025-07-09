/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

//!======================================================

// const ulElem = document.querySelector('.site-nav');
// const searchBtnElem = document.querySelector('.js-magic-btn');

// ulElem.textContent = 'Hello';
// searchBtnElem.textContent = 'test';

// const liElems = [...ulElem.querySelectorAll('li')];

// for (const liElem of liElems) {
//   liElem.textContent = 'Hello world';
// }

//!======================================================

/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

const ulElem = document.querySelector('site-nav');

console.log(ulElem);
console.log(ulElem.parentElement);
console.log(ulElem.firstElementChild);
console.log(ulElem.lastElementChild);
console.log(ulElem.previousElementSibling);
console.log(ulElem.nextElementSibling);
console.log(ulElem.children[1]);

//DOM - document object model
