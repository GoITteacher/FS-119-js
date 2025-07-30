/*
 * Метод setInterval(callback, delay, args)
 */

let counter = 1;

const intervalId = setInterval(() => {
  console.log(counter++);
}, 1000);

setTimeout(() => {
  console.log('CLEAR');
  clearInterval(intervalId);
}, 5000);

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */
