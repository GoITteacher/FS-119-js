/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// const notification = document.querySelector('.js-alert');

/*
 * Функції
 */

// function showNotification() {
//   console.log('OPEN');

//   notification.classList.add('is-visible');
// }
// function hideNotification() {
//   console.log('CLOSE');
//   notification.classList.remove('is-visible');
//   clearTimeout(timeoutId);
// }

// setTimeout(() => {
//   showNotification();

//   timeoutId = setTimeout(() => {
//     hideNotification();
//   }, 5000);
// }, 3000);

// notification.addEventListener('click', () => {
//   hideNotification();
// });

//!======================================================

let counter = 0;
setInterval(() => {
  console.log(counter++);
}, 1000);
