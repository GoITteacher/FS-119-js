/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */
//!======================================================
// const arr1 = [1, 2, 3, 4, 56, 7, 23, 6, 8, 89];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const arr = [...arr1];
// console.log(arr);

//!======================================================
/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
//!======================================================
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const min = Math.min(...temps);
// const max = Math.max(...temps);

// console.log(min, max);

//!======================================================

/**
 * Створення масиву і тип за посиланням
 */

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log(a === b);

// b[0].x = 120;

// console.log(a);

//!======================================================
/*
 * Поєднуємо кілька масивів в один через spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

//!======================================================

/*
 * Створення об'єкта
 */
// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {
//   ...objA, // x: 1, y: 2
//   ...objB, // x: 0, z: 3
// };

// const copy = { ...objC };

// console.log(objC);
// console.log(copy);

/**
 * Оновлюємо налаштування користувача
 */

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
  fontSize: '14px',
  fontColor: 'black',
};

const userSettings = {
  showNotifications: false,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log(finalSettings);

//!======================================================

// function foo(a, b, ...args) {
//   console.log(args);
// }

// foo(1, 2, 3, 4, 5);

// Math.max(1,)
// Math.min()
