import axios from 'axios';
import { getBooks } from './modules/booksAPI';

function foo() {}

// async function foo() {
//   const x = await getBooks();
// }

// async function foo() {}
// const foo1 = async () => {};

// const obj = {
//   async showName() {},
// };

// document.addEventListener('click', async () => {});

// [].forEach(async () => {});

//!======================================================

// async function foo() {
//   try {
//     const data = await getBooks();
//     const markup = templateMarkup(data);
//   } catch (err) {}
// }

//!======================================================

// async function getUser(userId) {
//   const BASE_URL = 'https://jsonplaceholder.typicode.com';
//   const END_POINT = `/users/${userId}`;
//   const url = BASE_URL + END_POINT;
//   const res = await axios.get(url);
//   return res.data;
// }

// async function init() {
//   const promise1 = getUser(1);
//   const promise2 = getUser(2);
//   const promise3 = getUser(3);
//   const promises = [promise1, promise2, promise3];

//   const res = await Promise.all(promises);
//   console.log(res);
// }

// async function init() {
//   getUser(1).then(console.log);
//   getUser(2).then(console.log);
//   getUser(3).then(console.log);
// }

// async function init() {
//   for (let i = 1; i <= 10; i++) {
//     const res = await getUser(i);
//     console.log(res);
//   }
// }

// init();

//!======================================================

async function fetchRandomUser() {
  const randomUserId = Math.round(Math.random() * 10);
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = `/users/${randomUserId}`;
  const url = BASE_URL + END_POINT;
  const res = await axios.get(url);
  return res.data;
}
async function fetchRandomPokemon() {
  const randomPokemonId = Math.round(Math.random() * 10);
  const BASE_URL = 'https://pokeapi.co/api/v2';
  const END_POINT = `/pokemon/${randomPokemonId}`;
  const url = BASE_URL + END_POINT;
  const res = await axios.get(url);
  return res.data;
}
async function fetchPokemon(id) {
  const BASE_URL = 'https://pokeapi.co/api/v2';
  const END_POINT = `/pokemon/${id}`;
  const url = BASE_URL + END_POINT;
  const res = await axios.get(url);
  return res.data;
}
async function init() {
  const initDate = new Date();
  console.log(initDate.toISOString());

  const pokemonPromise = fetchRandomPokemon();
  const userPromise = fetchRandomUser();

  const res = await Promise.all([pokemonPromise, userPromise]);

  const [pokemon, user] = res;

  console.log(pokemon, user);

  const finishDate = new Date();
  console.log(finishDate.toISOString());
}

init();

// async function foo1() {
//   for (let i = 1; i < 100; i++) {
//     const pokemon = await fetchPokemon(i);
//     console.log(pokemon);
//   }
// }

// async function foo1() {
//   const promises = [];

//   for (let i = 1; i < 100; i++) {
//     const promise = fetchPokemon(i);
//     promises.push(promise);
//   }

//   const res = await Promise.all(promises);
//   console.log(res);
// }

// foo1();

//!======================================================

// async function getNews(query) {
//    const baseURL = '';
//    const endPoint = '';
//    const url = baseURL + endPoint;

//    const params = {
//      param1: '1',
//      param2: '1',
//      param3: '1',
//    };

//    const headers = {
//      key1: 'value',
//    };

//    const res = await axios.get(url, { headers, params });
//    return res.data;
// }

//!======================================================
