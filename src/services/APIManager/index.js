import axios from 'axios';
import querystring from 'querystring';

const proxy = 'https://cors-anywhere.herokuapp.com/';

const API = axios.create({
  baseURL: `${proxy}https://newsapi.org/`
});

API.interceptors.request.use(
  ({ headers, ...config }) => ({
    ...config,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization: process.env.NEXT_PUBLIC_NEWSAPI_KEY
    }
  }),
  (error) => {
    return Promise.reject(error);
  }
);

export default class APIManager {
  static async getDatas() {
    const path = querystring.stringify({
      q: 'science',
      pageSize: 4
    });

    const res = await API.get(`v2/everything?${path}`);
    return res.data;
  }
}
