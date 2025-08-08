import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  headers: {},
  params: {},
});

export function getBooks() {
  return axios.get('/books').then(res => res.data);
}

export function createBook(newBook) {
  return axios.post('/books', newBook).then(res => res.data);
}

export function resetBook({ id, ...book }) {
  return axios.put(`/books/${id}`, book).then(res => res.data);
}

export function updateBook({ id, ...book }) {
  return axios.patch(`/books/${id}`, book).then(res => res.data);
}

export function deleteBook(id) {
  return axios.delete(`/books/${id}`).then(res => res.data);
}
