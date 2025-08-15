import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';

import { fetchNews } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-function1';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  ulElem: document.querySelector('.js-article-list'),
  loadMoreBtn: document.querySelector('.js-btn-load'),
};

//!======================================================

let userValue;
let currentPage;
let maxPage = 0;
const PAGE_SIZE = 10;

//!======================================================

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();

  userValue = e.target.elements.query.value.trim();
  currentPage = 1;

  if (!userValue) {
    return iziToast.error({});
  }

  try {
    const res = await fetchNews(userValue, currentPage);
    const markup = articlesTemplate(res.articles);
    refs.ulElem.innerHTML = markup;

    maxPage = Math.ceil(res.totalResults / PAGE_SIZE);
  } catch {
    maxPage = 0;
    iziToast.error({ message: 'ERROR' });
  }

  checkBtnVisibleStatus();
  showNotification();

  e.target.reset();
});

//!======================================================

refs.loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  checkBtnVisibleStatus();
  showNotification();

  try {
    const res = await fetchNews(userValue, currentPage);
    const markup = articlesTemplate(res.articles);
    refs.ulElem.insertAdjacentHTML('beforeend', markup);
  } catch {
    iziToast.error({ message: 'ERROR' });
  }
});

//!======================================================

function showLoadMore() {
  refs.loadMoreBtn.classList.remove('hidden');
}

function hideLoadMore() {
  refs.loadMoreBtn.classList.add('hidden');
}

function checkBtnVisibleStatus() {
  console.log(currentPage, maxPage);

  if (currentPage < maxPage) {
    showLoadMore();
  } else {
    hideLoadMore();
  }
}

function showNotification() {
  if (currentPage === 1 && maxPage !== 0) {
    iziToast.info({
      message: `Max Page - ${maxPage}`,
    });
  } else if (maxPage === 0) {
    iziToast.info({
      message: `Нічого не знайдено`,
    });
  } else if (currentPage === maxPage) {
    iziToast.info({
      message: `Це остання сторінка`,
    });
  }
}
