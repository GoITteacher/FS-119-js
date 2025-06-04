/*
 * Блокова область видимості змінних
 */

// if (true) {
//   const a = 5;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// if (true) {
//   const b = 10;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

//!======================================================
const x = 10;

function foo1() {
  const x = 25;
  console.log(x);
}

function foo2() {
  const x = 30;
  console.log(x);
}

function foo3() {
  console.log(x);
}

// function foo4() {
//   const x = 25;

//   if (true) {
//     const x = 55;
//     console.log(x);
//   }

//   console.log(x);
// }
// foo4();

//!======================================================

function home() {
  const balance = 50;

  if (true) {
    const balance = 100;
    console.log(balance);
  }

  if (true) {
    const x = 25;
    const balance = 70;
    console.log(balance);
  }

  if (true) {
    console.log(x);
    const balance = 52;
    console.log(balance);
  }

  console.log(balance);
}
