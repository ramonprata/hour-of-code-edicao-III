import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const SlitPane = (props) => {
  const { leftContent, rightContent } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <section>{leftContent}</section>
      <section>{props.children}</section>
      <section>{rightContent}</section>
    </div>
  );
};

SlitPane.propTypes = {};

const useStyles = makeStyles({
  container: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    justifyContent: 'space-between',
    columnGap: 24,
    '& *': {
      borderRadius: 4,
      padding: 16,
    },
  },
});

export default SlitPane;
