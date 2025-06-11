/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */
//!======================================================
// let link = 'https://my-site.com/about/';

// if (!link.endsWith('/')) {
//   link += '/';
// }

// console.log(link);
//!======================================================

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let url = 'https://my-site.com/about';

// if (url.includes('my-site') && !url.endsWith('/')) {
//   url += '/';
// }

// console.log(url);
//!======================================================
/*
 * Пошук у рядку методом includes()
 */

const blacklistedWord1 = 'spam';
const blacklistedWord2 = 'sale';

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = '#fatlivesmatter advertising campaign';

const hasFirstBanWord = string2.toLowerCase().includes(blacklistedWord1);
const hasSecondBanWord = string2.toLowerCase().includes(blacklistedWord2);
const hasBanWords = hasFirstBanWord || hasSecondBanWord;

if (hasBanWords) {
  console.log('Не можна таке писати!!');
} else {
  console.log('Відправляємо');
}

// if (string1.includes(blacklistedWord1) || string1.includes(blacklistedWord2)) {
//   console.log('Не можна таке писати!!');
// }
