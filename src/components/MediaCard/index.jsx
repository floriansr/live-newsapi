import * as React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cardContentContainer: {
    display: 'grid',
    textAlign: 'center',
    alignItems: 'center',
    height: 180
  }
});

const MediaCard = ({ article }) => {
  const classes = useStyles();

  console.log('MediaCard -> article', article);
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={article.description}
            height="140"
            image={article.urlToImage}
            title={article.title}
          />
          <CardContent className={classes.cardContentContainer}>
            <Typography gutterBottom variant="h6" component="h6">
              {article.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
export default MediaCard;
