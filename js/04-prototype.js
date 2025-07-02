/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */
//!======================================================

// const objA = {
//   x: 10,
//   y: 20,
// };

// const objB = {
//   t1: 40,
//   t2: 50,
//   __proto__: objA,
// };

// for (const key in objB) {
//   if (objB.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

//!======================================================

// const arr = [1, 2, 3];
// console.log(arr);

// arr.map();

//!======================================================

// const objA = {
//   x: 10,
//   y: 20,
// };

// const objB = {
//   x: 100,
//   y: 150,
//   __proto__: objA,
// };

// console.log(objB.x);
// console.log(objB.y);

//!======================================================

// const userPrototype = {
//   x: 10,
//   showName() {
//     console.log(this.name);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   setUser(newName, newAge) {
//     this.age = newAge;
//     this.name = newName;
//   },
//   showInfo() {
//     console.log(this.name, this.age);
//   },
// };

// const user1 = Object.create(userPrototype);
// const user2 = Object.create(userPrototype);
// const user3 = Object.create(userPrototype);
// const user4 = Object.create(userPrototype);

// user1.setUser('Vasya', 15);
// user2.setUser('Petya', 15);

// console.log(user1);
// console.log(user2);

//!======================================================
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

/**
 * ----------------------------------------
 */
// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.a);

// console.log(objA.hasOwnProperty('b'));
// console.log(objA.b);

// console.log(objA.hasOwnProperty('c'));
// console.log(objA.c);

// console.log(objA.hasOwnProperty('x'));
// console.log(objA.x);

//!======================================================

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((sum, item) => sum + item, 0);
// };
