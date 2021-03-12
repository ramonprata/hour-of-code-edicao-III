import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { DefaultPage } from '../shared/Components';
import { Button, CircularProgress, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import BoardCard from './BoardCard';
import BoardForm from './BoardForm';
import TrelloRepository from './TrelloRepository';
import Fab from '@material-ui/core/Fab';
import { useWidthResize } from '../aulaV/hooks/useWidthResize';

const TreloRpo = new TrelloRepository();

const Boards = (props) => {
  const {} = props;
  const [boards, setBoards] = useState([]);
  const { isMoble } = useWidthResize();
  const [statusRequest, setStatusRequest] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const [showFormBoard, setShowFormBoard] = useState(false);

  const loadBoards = async () => {
    try {
      setStatusRequest((status) => ({
        ...status,
        loading: true,
      }));

      const boards = await TreloRpo.getBoards();
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

  const classes = useStyles({ isMoble });

  const renderButton = () => {
    if (!isMoble) {
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
    }
    return null;
  };

  const renderContent = () => {
    if (statusRequest.loading) {
      return (
        <Grid container className={classes.loadingContainer} justify="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Grid>
      );
    }
    if (Boolean(boards.length)) {
      return (
        <div className={classes.boardsContainer}>
          {boards.map((board) => (
            <BoardCard board={board} key={board.id} />
          ))}
        </div>
      );
    }
  };

  const handleCloseModal = () => {
    setShowFormBoard(false);
  };

  return (
    <DefaultPage title="Boards" contentHeader={renderButton()}>
      <div className={classes.container}>{renderContent()}</div>
      <BoardForm showFormBoard={showFormBoard} closeModal={handleCloseModal} />
      <div className={classes.fabContainer}>
        {isMoble && (
          <Fab color="secondary" aria-label="add" onClick={() => setShowFormBoard(true)}>
            <AddIcon />
          </Fab>
        )}
      </div>
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
  boardsContainer: ({ isMoble }) => ({
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(260px, ${isMoble ? '1fr' : '260px'}))`, // mobile max 1fr - 260px
    padding: '8px 0',
    justifyItems: 'center',
    rowGap: 16,
  }),
  loadingContainer: {
    width: '100%',
    height: '50vh',
  },
  fabContainer: {
    position: 'absolute',
    bottom: 42,
    right: 24,
  },
});

export default Boards;
