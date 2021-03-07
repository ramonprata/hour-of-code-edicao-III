import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const DefaultPage = (props) => {
  const { title, contentHeader } = props;
  const classes = useStyles(props);
  return (
    <Paper square className={classes.container}>
      <Grid container justify="space-between" alignItems="center" className={classes.headerPage}>
        <Typography variant="h6">{title}</Typography>
        {contentHeader}
      </Grid>

      {props.children}
    </Paper>
  );
};

DefaultPage.propTypes = {
  title: PropTypes.string,
  contentHeader: PropTypes.node,
};

const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: 'calc(100vh - 64px)',
      overflow: 'hidden',
      backgroundColor:
        theme.palette.type === 'light' ? 'rgba(240, 246, 253, 0.8)' : 'rgba(0,0,0, 0.8)',
    },
    headerPage: {
      padding: '16px 16px 8px 16px',
    },
  };
});

export default DefaultPage;
