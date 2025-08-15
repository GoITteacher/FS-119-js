import axios from 'axios';

export async function fetchNews(userValue, currentPage) {
  const baseUrl = 'https://newsapi.org/v2';
  const endPoint = '/everything';
  const url = baseUrl + endPoint;

  const params = {
    q: userValue,
    apiKey: 'c8747511a2c34730a83caaff4f3693e7',
    pageSize: 10,
    page: currentPage,
  };

  const res = await axios.get(url, { params });
  return res.data;
}
