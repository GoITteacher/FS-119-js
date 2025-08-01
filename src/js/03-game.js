/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const result = document.querySelector('.result');

function createPromise(delay) {
  const randomSmile = new Promise((res, rej) => {
    const isPositiveSmile = Math.random() > 0.5;
    setTimeout(() => {
      if (isPositiveSmile) {
        res('🤑');
      } else {
        rej('👿');
      }
    }, delay);
  });
  return randomSmile;
}

startBtn.addEventListener('click', () => {
  const promises = [];

  for (let i = 0; i < 3; i++) {
    container.children[i].textContent = '';

    const smile = createPromise((i + 1) * 300);

    promises.push(smile);

    smile
      .then(res => {
        container.children[i].textContent = res;
      })
      .catch(res => {
        container.children[i].textContent = res;
      });
  }

  Promise.allSettled(promises).then(res => {
    const isLooser = res.some(el => el.status === 'rejected');
    result.textContent = isLooser
      ? 'Ви програли((( Але наступного разу вам ТОЧНО ПОВЕЗЕ!!!'
      : 'Ви перемогли, вітаємо!';
  });
});

console.log(container.children[2]);
