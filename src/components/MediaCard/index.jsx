import * as React from 'react';
import { useState } from 'react';

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
  const [open, setOpen] = useState(false);

  console.log('MediaCard -> article', article);

  const modalAction = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <Card>
        <CardActionArea onClick={modalAction}>
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
