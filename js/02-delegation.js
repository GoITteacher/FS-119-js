/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

// const container = document.querySelector('.container');

// container.addEventListener('click', e => {
//   if (e.target === e.currentTarget) {
//     return;
//   }

//   console.log(e.target);
// });

//!======================================================

const ulElem = document.querySelector('.js-list');

// ulElem.addEventListener('click', e => {
//   if (e.target === e.currentTarget) {
//     return;
//   }
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   if (!e.target.classList.contains('js-add-btn')) {
//     return;
//   }
//   console.log(e.target.nodeName);
// });

//!======================================================

ulElem.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const liElem = e.target.closest('li');

  console.log(liElem);

  liElem.remove();
});
//!======================================================

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

// const container = document.querySelector('.container');

// container.addEventListener('click', e => {
//   if (e.currentTarget === e.target) {
//     return;
//   }
//   const color = e.target.dataset.color;
//   document.body.style.backgroundColor = color;
// });
