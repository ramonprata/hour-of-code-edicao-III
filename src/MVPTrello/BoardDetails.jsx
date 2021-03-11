import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { DefaultPage, TextInputButton } from '../shared/Components';
import { lanesMock } from '../shared/mocks/lanes.mock';
import { DragDropContext } from 'react-beautiful-dnd';
import BoardLane from './BoardLane';
import { getBoardWithLanes, onDragEnd } from './utils';
import TaskCard from './TaskCard';
import { Paper } from '@material-ui/core';
import { useParams, useHistory } from 'react-router';
import TrelloRepository from './TrelloRepository';

const TrelloRepo = new TrelloRepository();

const BoardDetails = (props) => {
  const classes = useStyles(props);
  const [lanes, setLanes] = useState(lanesMock);
  const [boardDetail, setBoardDetail] = useState({});
  const [newLane, setNewLane] = useState(null);
  const [showTextField, setShowTextField] = useState(false);
  const params = useParams();
  const history = useHistory();
  const boardId = params.id;

  console.log('boardDetail :>> ', boardDetail);

  const loadBoardDetail = async () => {
    try {
      const board = await TrelloRepo.getBoardById(boardId);
      setBoardDetail(board);
    } catch (error) {
      history.replace('/');
    }
  };

  useEffect(() => {
    loadBoardDetail();
  }, []);

  const renderTask = (task, index) => {
    return <TaskCard task={task} index={index} />;
  };

  const renderLanes = () => {
    if (boardDetail.lanes) {
      return Object.entries(boardDetail.lanes).map(([laneId, lane]) => {
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
    }
    return null;
  };

  const saveLane = async () => {
    if (boardDetail && newLane) {
      const boardWithLanes = getBoardWithLanes(boardDetail, newLane);
      await TrelloRepo.saveBoard(boardWithLanes);
      loadBoardDetail();
      setNewLane(null);
    } else {
      setShowTextField(false);
    }
  };

  return (
    <DefaultPage title="Board Description">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, boardDetail.lanes, setLanes)}>
        <div className={classes.lanesContainer}>
          {renderLanes()}

          <Paper className={classes.addNewContainer} onBlur={saveLane}>
            <TextInputButton
              showTextField={showTextField}
              textFieldLabel="Lane name"
              textValue={newLane}
              onChangeText={(e) => setNewLane(e.target.value)}
              onClickButton={() => setShowTextField(true)}
              buttonLabel="Add new lane"
            />
          </Paper>
        </div>
      </DragDropContext>
    </DefaultPage>
  );
};

BoardDetails.propTypes = {};

const useStyles = makeStyles({
  lanesContainer: {
    display: 'flex',
    width: 'calc(100% - 24px)',
    height: '100%',
    padding: '0 0 0 16px',
    overflow: 'auto',
  },
  addNewContainer: {
    height: 'fit-content',
    minHeight: 54,
    padding: 16,
    width: 230,
  },
});

export default BoardDetails;
