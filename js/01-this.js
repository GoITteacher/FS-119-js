/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */
//!======================================================
/**
 * Глобальний контекст
 */

// function foo() {
//   console.log(this);
// }

// foo();
//!======================================================
/**
 * Контекст методу об'єкта
 */

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log(this);
//   },
// };

// user.showTag();
// user.showTag();
// user.showTag();
// user.showTag();

//!======================================================
/**
 * Контекст методу об'єкта, но объявлена как внешняя функция.
 */

// function showTag() {
//   console.log('showTag -> this', this);
// }

// showTag();

// const mango = {
//   tag: 'Mango',
// };

// mango.showUserTag = showTag;

// mango.showUserTag();
//!======================================================

/**
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const poly = {
//   tag: 'Poly',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// poly.showTag();

// const outerShowTag = poly.showTag;

// outerShowTag();

//!======================================================

/**
 * Контекст в callback-функциях
 */

// const jacob = {
//   tag: 'Jacob',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// function invokeAction(action) {
//   console.log(action);
//   const testUser = {
//     copy: action,
//   };
//   testUser.copy();
// }

// invokeAction(jacob.showTag);

//!======================================================
