import { fetchNews } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-function1';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  ulEl: document.querySelector('.js-article-list'),
  targetEl: document.querySelector('.js-target'),
  loaderEl: document.querySelector('.js-loader'),
};
//!======================================================

let userValue;
let currentPage;
let maxPage;
const PAGE_SIZE = 10;
const observer = new IntersectionObserver(handleObserver, {
  rootMargin: '1500px',
  threshold: 0,
});

//!======================================================

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();

  userValue = e.target.elements.query.value;
  currentPage = 1;

  showLoader();
  const result = await fetchNews(userValue, currentPage);
  const markup = articlesTemplate(result.articles);
  refs.ulEl.innerHTML = markup;

  maxPage = Math.ceil(result.totalResults / PAGE_SIZE);
  updateObserverStatus();

  hideLoader();
  e.target.reset();
});

//!======================================================

async function loadMore() {
  currentPage += 1;
  updateObserverStatus();
  showLoader();
  const result = await fetchNews(userValue, currentPage);
  const markup = articlesTemplate(result.articles);
  refs.ulEl.insertAdjacentHTML('beforeend', markup);
  hideLoader();
}

//!======================================================

function updateObserverStatus() {
  if (currentPage < maxPage) {
    console.log('ПОВІШАВ СПОСТЕРІГАЧА');

    observer.observe(refs.targetEl);
  } else {
    console.log('ЗНЯВ СПОСТЕРІГАЧА');
    observer.unobserve(refs.targetEl);
  }
}

//!======================================================

function showLoader() {
  refs.loaderEl.classList.remove('hidden');
}

function hideLoader() {
  refs.loaderEl.classList.add('hidden');
}
//!======================================================
function handleObserver(entries, observer) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    loadMore();
  }
}
