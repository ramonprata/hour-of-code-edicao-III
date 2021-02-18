import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { paletteColors } from '../shared/consts';

const Feed = () => {
  const classes = useStyles();

  return <div className={classes.container}>Feed</div>;
};

Feed.propTypes = {};

const useStyles = makeStyles({
  container: {
    minHeight: '20vh',
    minWidth: '20vw',
    justifySelf: 'center',
    backgroundColor: paletteColors.tertiary,
  },
});

export default Feed;
