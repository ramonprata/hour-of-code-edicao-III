import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const classes = useStyles(props);

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar variant="dense">
        <Grid container justify="space-between" alignItems="center">
          <Link
            to={{
              pathname: '/',
              state: {
                foo: 'text',
              },
            }}
            className={classes.link}
          >
            <Typography variant="h6" className={classes.title}>
              Header
            </Typography>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: theme.palette.background.default,
    padding: 0,
    '& > div': {
      padding: '0 16px',
    },
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'unset',
  },
}));

export default Header;
