/**
 * Ланцюжки методів
 */

// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(el => el > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map(el => el * 3);
// console.log(multByThree);

// const sorted = multByThree.toSorted((a, b) => a - b);
// console.log(sorted);

// const sortedbyChaining = numbers
//   .filter(el => el > 2)
//   .map(el => el * 3)
//   .toSorted((a, b) => a - b);

// console.log(sortedbyChaining);

/**
 * -------------------------------------
 */
const allCars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

const newArr = allCars.map(({ make, model }) => {
  const newObj = { make, model };
  return newObj;
});
//!======================================================

// const res = allCars
//   .filter(el => el.amount > 5)
//   .map((el, idx, arr) => {
//     const copy = { ...el };
//     copy.amount += arr.length;
//     return copy;
//   });

// console.log(allCars);
// console.log(res);

//!======================================================

// const res = allCars
//   .map(el => {
//     const copy = { ...el };
//     copy.amount *= 2;
//     return copy;
//   })
//   .filter((el, idx, arr) => {
//     return el.amount > arr[idx + 1]?.amount;
//   });

//!======================================================

// const arr = [[], [], []];

// const res = arr
//   .map(el => el * 2)
//   .filter((el, i, updateArr) => {
//     return el > updateArr[i + 1];
//   });
// console.log(res);

//!======================================================

const arr = [6, 2, 7, 4, 8, 9, 2];

const res = arr
  .filter(el => {
    return el % 2 === 0;
  })
  .map((el, i, newArr) => {
    return newArr[i - 1] + newArr[i + 1];
  });

// [6, 2, 4, 8 , 2]
// [2, 10, 10, 6 , 8]

// console.log(res);

//!======================================================

/**
 * Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */
const getModelsOnSale = cars => {};

// console.table(getModelsOnSale(allCars));

/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */
const getSortedCarsOnSale = cars => {};

// console.table(getSortedCarsOnSale(allCars));
