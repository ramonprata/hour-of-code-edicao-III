import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, FormControlLabel, Toolbar, Typography, Switch, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { darkMode, handleSwitchDarkMode } = props;
  const classes = useStyles(props);

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
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
            <Typography variant="h6" className={classes.title} color="initial">
              Header
            </Typography>
          </Link>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={handleSwitchDarkMode}
                name="enebledDarkMode"
                color="primary"
              />
            }
            label="Dark mode"
          />
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
    height: 64,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
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
