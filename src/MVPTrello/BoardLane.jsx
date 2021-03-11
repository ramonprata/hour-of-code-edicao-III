import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { makeStyles } from '@material-ui/styles';
import { Droppable } from 'react-beautiful-dnd';
import { Typography, Paper } from '@material-ui/core';
import TasksList from './TasksList';
import { TextInputButton } from '../shared/Components';

const BoardLane = (props) => {
  const { lane, laneId, renderTask, saveTask } = props;
  const classes = useStyles();
  const [showTextField, setShowTextField] = useState(false);
  const [taskDescription, setTaskDescription] = useState(null);

  const onSaveTask = () => {
    if (taskDescription) {
      const newTask = {
        id: uniqid(),
        taskDescription,
      };
      saveTask(laneId, newTask);
      setTaskDescription(null);
      setShowTextField(false);
    }
  };

  return (
    <Paper className={classes.laneContainer} key={laneId}>
      <header className={classes.laneHeader}>
        <Typography variant="h5">{lane.laneName}</Typography>
      </header>
      <div className={classes.inputContainer} onBlur={onSaveTask}>
        <TextInputButton
          showTextField={showTextField}
          textFieldLabel="Task description"
          textValue={taskDescription}
          onChangeText={(e) => setTaskDescription(e.target.value)}
          onClickButton={() => setShowTextField(true)}
          buttonLabel="Add new task"
        />
      </div>
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
  inputContainer: {
    width: 200,
    padding: '0 16px',
  },
});

export default BoardLane;
