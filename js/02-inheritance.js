/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

// class User {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   showFullName() {
//     console.log(`${this.firstname} ${this.lastname}`);
//   }
// }

// class Teacher extends User {
//   constructor(firstname, lastname, salary, email, phoneNumber) {
//     super(firstname, lastname);

//     this.salary = salary;
//     this.email = email;
//     this.phoneNumber = phoneNumber;
//   }

//   showInfo() {
//     console.log(`${this.firstname} ${this.lastname}
// Salary: ${this.salary}`);
//   }
// }

// class Student extends User {
//   constructor(firstname, lastname, group) {
//     super(firstname, lastname);
//     this.group = group;
//   }

//   showInfo() {
//     console.log(`${this.firstname} ${this.lastname} ${this.group}`);
//   }
// }

// const obj1 = new Teacher(
//   'Vasya',
//   'Pupkin',
//   1000,
//   'pupkin@gmail.com',
//   '+3802342341',
// );

// const obj2 = new Student('Vasya', 'Pupkin', 'PZ-17-1/9');
