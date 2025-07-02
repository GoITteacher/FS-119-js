// function foo() {
//   console.log("foo -> this", this);
// }

// foo();

//!======================================================
// const book = {
//   title: "React for beginners",
//   showThis() {
//     console.log("showThis -> this", this);
//   },
//   showTitle() {
//     console.log("showTitle -> this.title", this.title);
//   },
// };

// book.showThis();

// const outerShowThis = book.showThis;
// outerShowThis()

// const outerShowTitle = book.showTitle;
// outerShowTitle();

/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     for(const item of this.stones){

//     }
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald"));
// console.log(chopShop.calcTotalPrice("Diamond"));
// console.log(chopShop.calcTotalPrice("Sapphire"));
// console.log(chopShop.calcTotalPrice("Ruby"));
