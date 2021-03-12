import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const BoardCard = (props) => {
  const { board } = props;
  const classes = useStyles(props);

  const history = useHistory();

  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {board.boardName}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {board.boardDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => history.push(`/board/${board.id}`)}
          color="default"
          variant="outlined"
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

BoardCard.propTypes = {};

const useStyles = makeStyles({
  cardContainer: {
    width: 'calc(100% - 16px)',
    maxWidth: 300,
  },
});

export default BoardCard;
