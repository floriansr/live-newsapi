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

const Home = ({ articles }) => { // passing articles by props (fast refresh)
  const classes = useStyles();
  const [news, setNews] = useState(articles);
  const [totalNews, setTotalNews] = useState(0);

  useEffect(() => {
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
        {news.map((article) => (
          <Grid item xs key={shortid.generate()}>
            <MediaCard article={article} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps = async () => {
  console.log('x');
  const { articles } = await APIManager.getDatas();
  console.log('getStaticProps -> articles', articles);
  return {
    props: { articles },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1 // In seconds };
  };
};
