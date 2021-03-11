import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { DefaultPage, FormModal } from '../shared/Components';
import { Button, CircularProgress } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import BoardCard from './BoardCard';
import BoardForm from './BoardForm';
import { useLocation, useHistory } from 'react-router-dom';
import TrelloRepository from './TrelloRepository';

const TrelloRepo = new TrelloRepository();

const Boards = (props) => {
  const [boards, setBoards] = useState([]);
  const [statusRequest, setStatusRequest] = useState({
    loading: false,
    error: false,
    success: false,
  });
  const classes = useStyles(statusRequest);
  const [showFormBoard, setShowFormBoard] = useState(false);

  const loadBoards = async () => {
    try {
      setStatusRequest((status) => ({
        ...status,
        loading: true,
      }));

      const boards = await TrelloRepo.getBoards();

      setBoards(Object.values(boards));
      setStatusRequest((status) => ({
        ...status,
        loading: false,
        success: true,
      }));
    } catch (error) {
      setStatusRequest((status) => ({
        ...status,
        loading: false,
        error: true,
      }));
    }
  };

  useEffect(() => {
    if (!showFormBoard) {
      loadBoards();
    }
  }, [showFormBoard]);

  const renderButton = () => {
    return (
      <Button
        onClick={() => setShowFormBoard(true)}
        variant="contained"
        color="secondary"
        endIcon={<AddIcon />}
      >
        Add board
      </Button>
    );
  };

  const handleCloseModal = () => {
    setShowFormBoard(false);
  };

  const renderContent = () => {
    if (statusRequest.loading) {
      return <CircularProgress color="secondary" />;
    }
    if (boards) {
      return boards.map((board) => <BoardCard board={board} />);
    }
  };

  return (
    <DefaultPage title="Boards" contentHeader={renderButton()}>
      <div className={classes.container}>
        <div className={classes.boardsContainer}>{renderContent()}</div>
      </div>
      <BoardForm showFormBoard={showFormBoard} closeModal={handleCloseModal} />
    </DefaultPage>
  );
};

Boards.propTypes = {};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    overflow: 'auto',
    maxHeight: 'calc(100vh - 180px)',
  },
  boardsContainer: ({ loading }) => ({
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 260px))', // mobile max 1fr - 260px
    padding: '8px 0',
    justifyItems: loading ? 'center' : 'start', // only mobile
    rowGap: 16,
  }),
});

export default Boards;
