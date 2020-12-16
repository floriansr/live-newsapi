import * as React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

const MediaCard = ({ article }) => {
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
          <CardContent className={classes.root}>
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
