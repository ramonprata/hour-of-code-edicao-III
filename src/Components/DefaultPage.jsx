import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const DefaultPage = (props) => {
  const { title, contentHeader } = props;
  const classes = useStyles(props);

  return (
    <main className={classes.container}>
      <Grid container justify="space-between" className={classes.headerContainer}>
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
    // backgroundColor: '#fff',
    height: 'calc(100vh - 64px)',
    overflow: 'hidden',
  },
  headerContainer: {
    padding: '16px 24px',
  },
});

export default DefaultPage;
