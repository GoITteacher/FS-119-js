import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

//!======================================================

//https://newsapi.org/v2/everything?q=apple&from=2025-08-05&to=2025-08-05&sortBy=popularity&apiKey=c8747511a2c34730a83caaff4f3693e7
//!======================================================
// const url = 'https://jsonplaceholder.typicode.com/albums';

// fetch(url);
// fetch(url);
// fetch(url);

//!======================================================

// const url = 'https://pokeapi.co/api/v2/pokemon/1';

// function getPokemonInfo(id) {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   return fetch(url).then(res => {
//     return res.json();
//   });
// }

// getPokemonInfo(1);
// getPokemonInfo(5);

//!======================================================
//https://superhero-search.p.rapidapi.com/api/?hero=Super
function getSuperhero(hero) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    hero: hero,
  });

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
  };

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url, { headers }).then(res => res.json());
}

// getSuperhero();

//!======================================================
