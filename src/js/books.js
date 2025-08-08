import {
  getBooks,
  createBook,
  updateBook,
  resetBook,
  deleteBook,
} from './api/booksApi';

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};
//!======================================================

refs.createFormElem.addEventListener('submit', handleBookCreate);
refs.updateFormElem.addEventListener('submit', handleBookUpdate);
refs.resetFormElem.addEventListener('submit', handleBookReset);
refs.deleteFormElem.addEventListener('submit', handleBookDelete);

//!======================================================

//TODO===================================
function handleBookCreate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const data = {
    title: formData.get('bookTitle'),
    author: formData.get('bookAuthor'),
    desc: formData.get('bookDesc'),
  };

  createBook(data).then(createdBook => {
    const bookMarkup = templateBook(createdBook);
    refs.bookListElem.insertAdjacentHTML('afterbegin', bookMarkup);
  });

  e.target.reset();
}

//TODO===================================

function handleBookUpdate(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    id: formData.get('bookId'),
    title: formData.get('bookTitle') || undefined,
    author: formData.get('bookAuthor') || undefined,
    desc: formData.get('bookDesc') || undefined,
  };

  updateBook(data).then(updatedBook => {
    const markup = templateBook(updatedBook);
    const oldBookElem = document.querySelector(
      `.book-item[data-id="${data.id}"]`,
    );

    oldBookElem.insertAdjacentHTML('afterend', markup);
    oldBookElem.remove();
  });

  e.target.reset();
}
//TODO===================================
function handleBookReset(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    id: formData.get('bookId'),
    title: formData.get('bookTitle'),
    author: formData.get('bookAuthor'),
    desc: formData.get('bookDesc'),
  };

  resetBook(data).then(updatedBook => {
    const markup = templateBook(updatedBook);
    const oldBookElem = document.querySelector(
      `.book-item[data-id="${data.id}"]`,
    );

    oldBookElem.insertAdjacentHTML('afterend', markup);
    oldBookElem.remove();
  });

  e.target.reset();
}
//TODO===================================

function handleBookDelete(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;

  deleteBook(id).then(() => {
    const bookElem = document.querySelector(`.book-item[data-id="${id}"]`);
    bookElem.remove();
  });

  e.target.reset();
}

//TODO===================================

//!======================================================
getBooks().then(books => {
  const reverseBooks = books.reverse();
  const markup = templateBooks(reverseBooks);
  refs.bookListElem.innerHTML = markup;
});

//!======================================================
function templateBook({ id, title, desc, author, img, price, rating }, i) {
  return `
<li class="book-item card" data-id="${id}">
  <img
    class="book-img"
    src="https://picsum.photos/500?random=${i + 1}"
    alt=""
    lodaing="lazy"
  />

  <h5 class="book-title">${title} - ${id}</h5>
  <h6>Author: ${author}</h6>
  <p class="book-desc">${desc}</p>

  <div class="book-info">
    <span>Price: ${price}</span>
    <button>delete</button>
    <span>Rating: ${rating}</span>
  </div>
</li>`;
}

function templateBooks(books) {
  return books.map(templateBook).join('');
}

//!======================================================

refs.bookListElem.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;
  const liElem = e.target.closest('.book-item');
  const id = liElem.dataset.id;

  deleteBook(id).then(() => {
    liElem.remove();
  });
});
