import * as React from 'react';
import { useState, useEffect } from 'react';

import APIManager from 'services/APIManager';

import Grid from '@material-ui/core/Grid';


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
      <Grid
        container
        spacing={3}
        alignItems="center"
      >
        {news.length !== 0 &&
          news.map((article) => (
            <Grid item xs>
              <p>{article.title}</p>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Home;
