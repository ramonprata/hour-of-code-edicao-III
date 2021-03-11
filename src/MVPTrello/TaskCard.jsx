import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Draggable } from 'react-beautiful-dnd';
import { Card, Typography } from '@material-ui/core';

const TaskCard = (props) => {
  const { task, index } = props;
  const classes = useStyles();

  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Card
            variant="outlined"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`${classes.taskContainer} ${
              snapshot.isDragging ? classes.taskDragging : ''
            }`}
          >
            <Typography variant="p">{task.description}</Typography>

            {provided.placeholder}
          </Card>
        );
      }}
    </Draggable>
  );
};

TaskCard.propTypes = {};

const useStyles = makeStyles({
  taskContainer: {
    userSelect: 'none',
    padding: 16,
    minHeight: '46px',
    fontSize: 14,
    marginBottom: 16,
  },
  taskDragging: {
    opacity: 0.9,
  },
});

export default TaskCard;
