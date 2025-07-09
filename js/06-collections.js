/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

// const colorTemplate = item => {
//   return `<div class="color-item">
//         <div style="background-color: ${item.color}; width: 100px; height: 100px"></div>
//         <p>color: ${item.label}</p>
//       </div>`;
// };

// function colorsTemplate(items) {
//   return items.map(colorTemplate).join('\n');
// }

// const markup = colorsTemplate(options);

// colorPickerContainerEl.innerHTML = markup;
//!======================================================

// const arr = ['js', 'html', 'css'];

// const itemTemplate = el => {
//   return `<li>${el}</li>`;
// };

// function itemsTemplate(items) {
//   const res = items.map(itemTemplate).join('');
//   return res;
// }
