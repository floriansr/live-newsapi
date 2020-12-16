import * as React from 'react';
import { useState, useEffect } from 'react';

import APIManager from 'services/APIManager';

const Home = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchNews = async () => {
      const {articles} = await APIManager.getDatas();
      console.log("fetchNews -> articles", articles)
      setNews(articles)
    };

    fetchNews();
  }, []);
  return (
    <>
      <h3>Hello world !</h3>
    </>
  );
};

export default Home;
