import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000/users',
  headers: { 'X-Custom-Header': 'foobar' },
});
