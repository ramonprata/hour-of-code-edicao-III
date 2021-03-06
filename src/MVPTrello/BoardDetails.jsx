import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { DefaultPage } from '../shared/Components';
import { lanesMock } from '../shared/mocks/lanes.mock';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import BoardLane from './BoardLane';
import { onDragEnd } from './utils';
import TaskCard from './TaskCard';

const BoardDetails = (props) => {
  const classes = useStyles(props);
  const [lanes, setLanes] = useState(lanesMock);

  const renderTask = (task, index) => {
    return <TaskCard task={task} index={index} />;
  };

  const renderLanes = () => {
    return Object.entries(lanes).map(([laneId, lane]) => {
      return (
        <BoardLane
          laneTitle="Title"
          laneId={laneId}
          lane={lane}
          renderTask={renderTask}
          key={laneId}
        />
      );
    });
  };

  return (
    <DefaultPage title="Board Description">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, lanes, setLanes)}>
        <div className={classes.lanesContainer}>{renderLanes()}</div>
      </DragDropContext>
    </DefaultPage>
  );
};

BoardDetails.propTypes = {};

const useStyles = makeStyles({
  lanesContainer: {
    display: 'flex',
    height: '100%',
    padding: 24,
  },
});

export default BoardDetails;
