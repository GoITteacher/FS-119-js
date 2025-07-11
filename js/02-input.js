/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

// const userNameElem = document.querySelector('.js-user-name');

// userNameElem.addEventListener('input', () => {
//   const value = userNameElem.value;

//   if (value.length > 6) {
//     userNameElem.classList.add('valid-input');
//     userNameElem.classList.remove('invalid-input');
//   } else {
//     userNameElem.classList.add('invalid-input');
//     userNameElem.classList.remove('valid-input');
//   }
// });

// userNameElem.addEventListener('blur', () => {
//   console.log('Blur');

//   userNameElem.classList.remove('valid-input', 'invalid-input');
// });

//!======================================================
/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

// const userNameElem = document.querySelector('.js-user-name');

// userNameElem.addEventListener('blur', handleInputBlur);

// function handleInputBlur() {
//   const username = userNameElem.value;
//   alert(`Hello ${username}`);
// }
