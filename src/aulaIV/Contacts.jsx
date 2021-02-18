import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { paletteColors } from '../shared/consts';

const Contacts = () => {
  const classes = useStyles();

  return <div className={classes.container}>Contacts</div>;
};

Contacts.propTypes = {};

const useStyles = makeStyles({
  container: {
    minHeight: '20vh',
    backgroundColor: paletteColors.secondary,
  },
});

export default Contacts;
