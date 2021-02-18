import React from 'react';
import { makeStyles } from '@material-ui/styles';
import FancyBorder from './FancyBorder';

const WelcomeDialog = () => {
  return (
    <FancyBorder color="primary">
      <b>Hello there!</b>
    </FancyBorder>
  );
};

const useStyles = makeStyles({});

export default WelcomeDialog;
