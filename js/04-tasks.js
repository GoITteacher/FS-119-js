/* 
**1. Завдання:**  
Створи об'єкт із властивостями `firstName` (рядок), `lastName` (рядок) та `age`
(число). Додай метод `getFullName`, який повертає повне ім'я у форматі:
`[firstName] [lastName]`. Також додай метод `incrementAge`, який збільшує вік
на 1.
*/

const task1 = {
  firstName: 'Vasya',
  lastName: 'Pupkin',
  age: 25,

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  incrementAge() {
    this.age += 1;
  },
};

//!======================================================

/* 
**2. Завдання:**  
Створи об'єкт з властивостями `width` (число), `height` (число). Додай метод
`calculateArea`, який повертає площу прямокутника, та метод
`calculatePerimeter`, який повертає периметр.
*/

// const obj = {
//   width: 150,
//   height: 200,
//   calculateArea() {
//     return this.width * this.height;
//   },
//   calculatePerimeter() {
//     return this.width * 2 + this.height * 2;
//   },
// };

//!======================================================
/* 
**3. Завдання:**  
Створи об'єкт із властивостями `name` (рядок), `position` (рядок) та `salary`
(число). Додай метод `getInfo`, який повертає рядок у форматі:
`[name] працює на позиції [position] із зарплатою [salary]`.
*/

const person = {
  name: 'Roman',
  position: 'Fullstack developer',
  salary: 1200,

  getInfo() {
    return `${this.name} працює на позиції ${this.position} із зарплатою ${this.salary}`;
  },
};

console.log(person.getInfo());

//!======================================================

/* 
**4. Завдання:**  
Створи об'єкт із властивостями `email` (рядок) та `password` (рядок). Додай
метод `checkLogin`, який приймає два аргументи (email і password) і повертає
`true`, якщо вони збігаються зі значеннями об'єкта.
*/

const obj1 = {
  email: 'testuser@gmail.com',
  password: 'QWERTY',
  checkLogin(email, password) {
    const isValidEmail = this.email === email;
    const isValidPassword = this.password === password;
    return isValidEmail && isValidPassword;
  },
};
const obj2 = {
  email: 'volodka@gmail.com',
  password: 'password',
  checkLogin(email, password) {
    const isValidEmail = this.email === email;
    const isValidPassword = this.password === password;
    return isValidEmail && isValidPassword;
  },
};
const obj3 = {
  email: 'goitTeacher@gmail.com',
  password: 'testPassword',
  checkLogin(email, password) {
    const isValidEmail = this.email === email;
    const isValidPassword = this.password === password;
    return isValidEmail && isValidPassword;
  },
};

console.log(obj1.checkLogin('testus1er@gmail.com', 'QWERTY'));
