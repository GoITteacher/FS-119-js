/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const formElem = document.querySelector('.js-form');
const ulElem = document.querySelector('.js-item-list');

// formElem.addEventListener('submit', e => {
//   e.preventDefault();

//   const userData = {
//     comment: formElem.elements.comment.value,
//     email: formElem.elements.email.value,
//     password: formElem.elements.password.value,
//   };

//   const markup = infoTemplate(userData);

//   ulElem.insertAdjacentHTML('beforeend', markup);

//   formElem.reset();
// });

// function infoTemplate(obj) {
//   return `<li>
//         <p>${obj.email}</p>
//         <p>${obj.password}</p>
//         <p>${obj.comment}</p>
//       </li>`;
// }

//!======================================================

formElem.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(formElem);

  //   const userIfno = {
  //     email: formData.get('email'),
  //     password: formData.get('password'),
  //     comment: formData.get('comment'),
  //   };

  //   const userInfo = Object.fromEntries(formData.entries());
  //   console.log(userInfo);
});
