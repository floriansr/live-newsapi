import * as React from 'react';
import { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import shortid from 'shortid';

import APIManager from 'services/APIManager';

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const { articles } = await APIManager.getDatas();
      console.log('fetchNews -> articles', articles);
      setNews(articles);
    };

    fetchNews();
  }, []);
  return (
    <>
      <Grid container spacing={3} alignItems="center">
        {news.length !== 0 &&
          news.map((article) => (
            <Grid item xs key={shortid.generate()}>
              <p>{article.title}</p>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Home;
