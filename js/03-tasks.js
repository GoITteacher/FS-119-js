/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */
const hours = 14;
const minutes = 0;

function task1(h, m) {
  if (m === 0) {
    return `${h} г.`;
  } else {
    return `${h} г. ${m} хв.`;
  }
}

function task1_1(h, m) {
  let result = '';

  if (m === 0) {
    result = `${h} г.`;
  } else {
    result = `${h} г. ${m} хв.`;
  }

  return result;
}

function task1_2(h, m) {
  return m == 0 ? `${h} г.` : `${h} г. ${m} хв.`;
}

const timestring = task1(hours, minutes);
console.log(timestring);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 0;

if (daysUntilDeadline === 0) {
  console.log('Today');
} else if (daysUntilDeadline === 1) {
  console.log('Tomorrow');
} else if (daysUntilDeadline === 2) {
  console.log('Overmorrow');
} else {
  console.log('Date in the future');
}
