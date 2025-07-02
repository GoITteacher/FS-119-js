/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */
//!======================================================

// const user1 = {
//   name: 'Vasya',
//   showName(r, g, b) {
//     console.log(this, r, g, b);
//   },
// };

// const user2 = {
//   name: 'Petya',
// };

// const red = 10;
// const green = 30;
// const blue = 20;

// const rgb = [10,20,30];

// user1.showName.call(user2, red);
// user1.showName.apply(user2, rgb);

// user1.showName(10,20,30);

//!======================================================

// 1 - undefined
// 3 - object
// 7 - call/apply
// 9 - bind
// 11 - arrow function

//!======================================================
const changeColor = function (color) {
  this.color = color;
  console.log(`new color - ${color} for ${this.name}`);
};

const hat = {
  name: 'hat',
  color: 'black',
};

const sweater = {
  name: 'sweater',
  color: 'green',
};

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor();
// changeSweaterColor('green');

// const copy = changeHatColor.bind(sweater);

//!======================================================

const counter = {
  value: 0,
  increment(value) {
    this.value += value;
    console.log('increment -> this', this);
  },
  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  },
};

// const incrementCounter = counter.increment.bind(counter);

// incrementCounter(25);

//!======================================================

// const x = 25;

//!======================================================

/* 
1. Визначити тип функції
  - якщо звичайна - подивитись момент виклику
  - якщо стрілчата то взяти this від батьківської функції
*/

// function foo() {
//   const foo1 = () => {
//     const foo2 = () => {
//       const foo3 = () => {
//         const foo4 = () => {
//           // this = { name: 'mango' }
//           console.log(this);
//         };

//         foo4();
//       };

//       foo3();
//     };

//     foo2();
//   };

//   foo1();
// }

// foo.call({ name: 'mango' });

//!======================================================
