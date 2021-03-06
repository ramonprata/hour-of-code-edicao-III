import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import uniqid from 'uniqid';

const BoardCard = (props) => {
  const {} = props;
  const classes = useStyles(props);

  const history = useHistory();

  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <Typography variant="h5" component="h2">
          titulo card
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => history.push(`/board/${uniqid()}`)}>
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
  },
});

export default BoardCard;
