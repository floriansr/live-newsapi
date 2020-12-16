import * as React from 'react';
import { useState } from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cardContentContainer: {
    display: 'grid',
    textAlign: 'center',
    alignItems: 'center',
    height: 180
  },
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  modalDescription: {
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: 'white',
    opacity: '0.95',
    borderRadius: '1rem',
    padding: '2rem',
    maxWidth: '40%',
    margin: '0 auto'
  }
});

const MediaCard = ({ article }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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

      <Modal
        open={open}
        onClose={modalAction}
        className={classes.modalContainer}
        aria-labelledby={article.title}
        aria-describedby={article.description}>
        <div
          onClick={modalAction}
          role="presentation" // accessibility
          className={classes.modalDescription}>
          <p>{article.description}</p>
        </div>
      </Modal>
    </>
  );
};
export default MediaCard;
