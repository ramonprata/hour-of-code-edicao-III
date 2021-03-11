import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Droppable } from 'react-beautiful-dnd';
import { Typography, Paper } from '@material-ui/core';
import TasksList from './TasksList';

const BoardLane = (props) => {
  const { lane, laneId, renderTask } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.laneContainer} key={laneId}>
      <header className={classes.laneHeader}>
        <Typography variant="h5">{lane.laneName}</Typography>
      </header>
      <Droppable droppableId={laneId} key={laneId}>
        {(provided, snapshot) => {
          return (
            <TasksList
              laneId={laneId}
              lane={lane}
              renderTask={renderTask}
              droppableProps={{ snapshot, provided }}
            />
          );
        }}
      </Droppable>
    </Paper>
  );
};

BoardLane.propTypes = {};

const useStyles = makeStyles({
  laneContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignTasks: 'center',
    marginRight: 16,
    maxHeight: 'calc(100% - 100px)',
  },
  laneHeader: {
    padding: 16,
  },
});

export default BoardLane;
