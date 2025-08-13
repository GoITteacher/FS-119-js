import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';

const refs = {
  formEl: document.querySelector('.js-pokemon-form'),
  listEl: document.querySelector('.js-pokemon-list'),
  loaderEl: document.querySelector('.js-loader'),
};

//!======================================================

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const pokemonName = e.target.elements.query.value;

  showLoader();

  try {
    const pokemon = await fetchPokemon(pokemonName);
    const markup = pokemonTemplate(pokemon);
    refs.listEl.insertAdjacentHTML('afterbegin', markup);
  } catch {
    iziToast.error({
      message: 'Invalid pokemon Name!',
    });
  }

  hideLoader();

  e.target.reset();
});

async function fetchPokemon(pokemonName) {
  const baseUrl = 'https://pokeapi.co/api/v2';
  const endPoint = `/pokemon/${pokemonName}`;
  const url = baseUrl + endPoint;
  const res = await axios.get(url);
  return res.data;
}

//!======================================================

function pokemonTemplate(pokemon) {
  const {
    height,
    weight,
    id,
    name,
    base_experience,
    sprites: { front_default, back_default },
  } = pokemon;

  return `<div class="pokemon-card pokemon-item">
  <h1 class="pokemon-name">${name} - Pokemon Details</h1>
  <img data-back="${back_default}" data-front="${front_default}"
    class="pokemon-image js-pocimage"
    src="${front_default}"
    alt="${name}"
  />

  <h2 class="section-title">Basic Information</h2>
  <ul class="info-list">
    <li>ID: ${id}</li>
    <li>Height: ${height} decimetres</li>
    <li>Weight: ${weight} grams</li>
    <li>Base Experience: ${base_experience}</li>
  </ul>
</div>`;
}

//!======================================================

function showLoader() {
  refs.loaderEl.classList.remove('hidden');
}

function hideLoader() {
  refs.loaderEl.classList.add('hidden');
}
