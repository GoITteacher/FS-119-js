/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: 'Kate',
    age: 12,
  },
  {
    name: 'Alex',
    age: 25,
  },
  {
    name: 'Mark',
    age: 31,
  },
];

const res = users.filter(({ age }) => age > 20);

/**
 * Без деструктуризації
 */
const names = [];

for (const user of users) {
  names.push(user.name);
}

console.log(names);

/**
 * З деструктуризацією
 */
