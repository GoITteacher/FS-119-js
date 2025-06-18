/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// const keys = Object.keys(user);

// for (const i of keys) {
//   console.log(`${i}: ${user[i]}`);
// }

//!======================================================

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const arr = Object.values(salaries);

// let total = 0;// 260

// for (const item of arr) {
//   total += item;
// }

// console.log(total);

//!======================================================

// "Об'єкт apartment описує квартиру 6 властивостями: шлях до зображення, опис, рейтинг, ціна, теги і власник. Властивість owner (власник) також є об'єктом. Оголошено шість змінніх, значення яких це значення відповідних властивостей об'єкту apartment.

// Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;

// ownerPhone - телефон власника;

// ownerEmail - пошта власника;

// numberOfTags - кількість елементів масиву у властивості tags;

// firstTag - перший елемент масиву у властивості tags;

// lastTag - останній елемент масиву у властивості tags.

// Тести

// Оголошена змінна apartment за допомогою const

// Значення змінної apartment - це об'єкт

// Оголошена змінна ownerName за допомогою const

// Значення змінної ownerName - це рядок ""Henry""

// Оголошена змінна ownerPhone за допомогою const

// Значення змінної ownerPhone - це ""982-126-1588""

// Оголошена змінна ownerEmail за допомогою const

// Значення змінної ownerEmail - це ""henry.carter@aptmail.com""

// Оголошена змінна numberOfTags за допомогою const

// Значення змінної numberOfTags - це 3

// Оголошена змінна firstTag за допомогою const

// Значення змінної firstTag - це ""premium""

// Оголошена змінна lastTag за допомогою const

// Значення змінної lastTag - це ""top""

// питания чому у данному випадку до const lastTag = apartment.tags[2]; не можемо закону тись як [-1]?

// const aparments = {
//   tags: [1,2,3,56,2,12,3]
// }
// lastTag=aparments.tags[aparments.tags.length - 1]

//!======================================================

const book = {
  author: 'Volodka',
  pages: 300,
  propKey: 'Hello',
};

const propKey = 'author';
const x = 'pages';

// console.log(book[x]); // "Bernard Cornwell"
