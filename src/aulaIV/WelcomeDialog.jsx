import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import FancyBorder from './FancyBorder';

const WelcomeDialog = (props) => {
  return (
    <FancyBorder color="primary">
      <b>Hello there!</b>
    </FancyBorder>
  );
};

WelcomeDialog.propTypes = {};

const useStyles = makeStyles({});

export default WelcomeDialog;
