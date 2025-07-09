/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */
const heroTitleEl = document.querySelector('.hero__title');
const imageEl = document.querySelector('.hero__image');
//!======================================================

// const imgElems = [...document.querySelectorAll('img')];
// console.log(imgElems);

// for (const imgElem of imgElems) {
//   const randomId = Math.round(Math.random() * 100);
//   const randomUrl = `https://picsum.photos/200?random=${randomId}&car,Toyota`;
//   imgElem.setAttribute('src', randomUrl);
//   imgElem.setAttribute('alt', randomId);
//   imgElem.setAttribute('href', randomId);
//   imgElem.setAttribute('disabled', true);
// }

//!======================================================

// const createBtnElem = document.querySelector('button[data-action="add"]');

// console.log(createBtnElem);

// createBtnElem.removeAttribute('disabled');

//!======================================================
/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// const isDisabled = imageEl.hasAttribute('disabled');

//!======================================================
/*
 * Data-атрибути
 */
// const actions = document.querySelectorAll('.actions button');

// const createBtnElem = document.querySelector('button[data-action="add"]');
// const createBtnElem = document.querySelector('button[data-action="delete"]');

// console.log(createBtnElem.dataset.action);

// createBtnElem.dataset.myTestProps = 'Hello Props';

//!======================================================
