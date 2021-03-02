import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, TextField, CardContent } from '@material-ui/core';
import DefaultPage from '../Components/DefaultPage';

const Board = (props) => {
  const {} = props;
  const classes = useStyles(props);

  return (
    <DefaultPage title="Board name">
      <div className={classes.boardContainer}>
        <Card className={classes.laneContainer}>lane 1</Card>

        <Card className={classes.laneContainer}>lane 2</Card>

        <Card className={classes.laneContainer}>lane 3</Card>

        <Card className={classes.laneContainer}>lane 4</Card>
      </div>
    </DefaultPage>
  );
};

Board.propTypes = {};

const useStyles = makeStyles({
  boardContainer: {
    height: 'calc(100vh - 140px)',
    width: 'calc(100vw - 16px)',
    display: 'flex',
    overflowX: 'auto',
    padding: 8,
  },
  laneContainer: {
    height: 120,
    minWidth: 260,
    margin: '0 4px',
  },
  laneCard: {
    backgroundColor: '#ebecf0',
    padding: 8,
  },
});

export default Board;
