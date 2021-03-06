import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const DefaultPage = (props) => {
  const { title, contentHeader } = props;
  const classes = useStyles(props);
  return (
    <main className={classes.container}>
      <Grid container justify="space-between" className={classes.headerPage}>
        <Typography variant="h6">{title}</Typography>
        {contentHeader}
      </Grid>

      {props.children}
    </main>
  );
};

DefaultPage.propTypes = {
  title: PropTypes.string,
  contentHeader: PropTypes.node,
};

const useStyles = makeStyles({
  container: {
    height: 'calc(100vh - 64px)',
    overflow: 'hidden',
    backgroundColor: '#4b4b5290',
  },
  headerPage: {
    position: 'relative',
    zIndex: 2,
    padding: '16px 24px',
    backgroundColor: '',
    '-webkit-box-shadow': '-2px 14px 71px 3px rgba(0,0,0,0.75)',
    '-moz-box-shadow': '-2px 14px 71px 3px rgba(0,0,0,0.75)',
    'box-shadow': '-2px 14px 71px 3px rgba(0,0,0,0.75)',
  },
});

export default DefaultPage;
