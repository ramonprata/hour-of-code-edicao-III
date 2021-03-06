import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const {} = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Link
            to={{
              pathname: '/',
              state: {
                foo: 'text',
              },
            }}
          >
            <Typography variant="h6" className={classes.title}>
              Header
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxHeight: 64,
  },
  header: {
    backgroundColor: '#4b4b52',
  },
  title: {
    flexGrow: 1,
    color: '#fff',
  },
});

export default Header;