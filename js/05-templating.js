/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */
//!======================================================
// const titleEl = document.querySelector('.title');

// titleEl.textContent = '<a>Hello world</a>';
// titleEl.innerHTML = ``;

// console.log(titleEl.innerHTML);
//!======================================================
// const ulElem = document.querySelector('.js-list');

// let str = ulElem.innerHTML;
// str = str.replaceAll('p', 'span').toUpperCase();
// console.log(str);

// ulElem.innerHTML = str;
//!======================================================
/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */

// const markup = `<li class="table-item withdraw">
//           <td>test</td>
//           <td>test</td>
//           <td>test</td>
//           <td>test</td>
//           <td>test</td>
//           <td>test</td>
//           <td>test</td>
//         </li>`;

// const ulElem = document.querySelector('.js-list');

// ulElem.insertAdjacentHTML('afterend', markup);
