import * as React from 'react';
import { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import shortid from 'shortid';

import APIManager from 'services/APIManager';

import MediaCard from 'components/MediaCard';

const useStyles = makeStyles(() => ({
  gridContainer: {
    height: '100vh',
    padding: '0 2rem'
  }
}));

const Home = () => {
  const classes = useStyles();
  const [news, setNews] = useState([]);
  const [totalNews, setTotalNews] = useState(0)

  useEffect(() => {
    const fetchNews = async () => {
      const { articles, totalResults } = await APIManager.getDatas();
      console.log("fetchNews -> totalResults", totalResults)
      // console.log('fetchNews -> articles', articles);
      setTotalNews(totalResults);
      setNews(articles);
    };

    fetchNews();
  }, []);
  return (
    <>
      <Grid
        container
        spacing={3}
        alignItems="center"
        className={classes.gridContainer}>
        {news.length !== 0 &&
          news.map((article) => (
            <Grid item xs key={shortid.generate()}>
              <MediaCard article={article} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Home;
