/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

// class User {
//   #login;
//   #email;

//   constructor(info) {
//     this.#login = info.login;
//     this.#email = info.email;
//   }

//   get login() {
//     return this.#login;
//   }
//   get email() {
//     return this.#email;
//   }

//   set login(newLogin) {
//     if (newLogin.length > 3) {
//       this.#login = newLogin;
//     }
//   }
//   set email(newEmail) {
//     if (newEmail.endsWith('@gmail.com')) {
//       this.#email = newEmail;
//     }
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.email);
// mango.email = 'helloworld';
// console.log(mango.email);
