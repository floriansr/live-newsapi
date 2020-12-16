import axios from 'axios';

const API = axios.create({
  baseURL: 'https://newsapi.org/'
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
    const res = await API.get('v2/top-headlines?category=science');
    return res.data;
  }
}
