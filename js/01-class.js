/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

// class User {
//   constructor(firstname, lastname, userAge) {
//     this.firstname = firstname;
//     this.lastname = lastname;

//     if (userAge > 0) {
//       this.age = userAge;
//     } else {
//       this.age = 1;
//     }

//     this.balance = 0;
//   }

//   showFullName() {
//     console.log(this.firstname);
//     console.log(this.lastname);
//   }

//   showInfo() {}
// }

// const user1 = new User('Volodymyr', 'Pashchenko');
// const user2 = new User('Anton', 'Tereza');

// console.log(user1);
// console.log(user2);

//!======================================================

// class User {
//   #age;

//   constructor(name) {
//     this.name = name;
//     this.#age = 0;
//   }

//   showInfo() {
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.#age}`);
//   }

//   get age() {
//     return `Age: ${this.#age}`;
//   }

//   set age(x) {
//     if (x > 0 && x < 100) {
//       this.#age = x;
//     } else {
//       console.log('Invalid Value');
//     }
//   }
// }

// const user1 = new User('Vasya');

// user1.age = -25;

// console.log(user1.age);

// console.log(user1.name);

//!======================================================

// class Product {
//   static company = 'Apple';
//   static discount = 200;
//   static amount = 0;
//   static #items = [];

//   constructor(title, price, quantity) {
//     this.title = title;
//     this.price = price;
//     this.quantity = quantity;
//     Product.amount += quantity;
//     Product.#items.push(this);
//   }

//   showInfo() {
//     console.log(`---------------
// Product: ${this.title};
// Price: ${this.price};
// Quantity: ${this.quantity};
// Discount: ${Product.discount};
// TotalPrice: ${this.price * this.quantity - Product.discount};
// ---------------`);
//   }

//   static get items() {
//     return this.#items;
//   }

//   static showItems() {
//     for (const item of Product.#items) {
//       item.showInfo();
//     }
//   }
// }

// const item1 = new Product('Iphone 14', 1500, 20);
// const item2 = new Product('Iphone 15', 1700, 13);
// const item3 = new Product('Iphone 16', 2000, 5);

// console.log(Product.items);

// Product.showItems();
