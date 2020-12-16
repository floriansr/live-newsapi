import * as React from 'react';
import { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { message } from 'antd';
import shortid from 'shortid';

import 'antd/dist/antd.css';

import APIManager from 'services/APIManager';

import MediaCard from 'components/MediaCard';

const useStyles = makeStyles(() => ({
  gridContainer: {
    height: '100vh',
    padding: '0 2rem'
  }
}));

const Home = () => {
  // As we use proxy to get our app on production environment (Plan: Developer - free account), we can't use SSG !
  const classes = useStyles();
  const [news, setNews] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [totalNews, setTotalNews] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      //  That's why, to save time, we will instantly fetch before setInterval is triggered
      try {
        const { articles } = await APIManager.getDatas();
        setNews(articles);
        message.success('Welcome..!', 3);
      } catch (error) {
        message.error('An error occured', 3);
      }
    };

    fetchNews();

    setInterval(async () => {
      try {
        const { articles, totalResults } = await APIManager.getDatas();

        setTotalNews((totalNews) => {
          if (totalNews !== totalResults) {
            setNews(articles); // rerender card medias
            return totalResults;
          } else {
            message.loading('Looking for news...', 3);
            return totalNews;
          }
        });
      } catch (error) {
        console.error(error);
        message.error('An error occured', 3);
      }
    }, 15 * 1000); // fetch news every 15 sec
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
