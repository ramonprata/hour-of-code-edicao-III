import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DefaultPage from '../Components/DefaultPage';
import BoardCard from './BoardCard';
import FormModal from '../Components/FormModal';

const Boards = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const {} = props;
  const classes = useStyles(props);

  return (
    <DefaultPage
      title="Boards"
      contentHeader={
        <Button
          onClick={() => setModalOpen(true)}
          variant="contained"
          color="default"
          className={classes.button}
          endIcon={<AddIcon />}
        >
          Add board
        </Button>
      }
    >
      <div className={classes.container}>
        <div className={classes.boardsContainer}>
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </div>
      </div>
      <div className={classes.containerButton}>
        <Fab color="primary" aria-label="add" onClick={() => setModalOpen(true)}>
          <AddIcon />
        </Fab>
      </div>
      <FormModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        handleSave={() => setModalOpen(false)}
      />
    </DefaultPage>
  );
};

Boards.propTypes = {};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 16,
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 180px)',
  },
  boardsContainer: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr) )',
    padding: '16px 0',
    justifyItems: 'center',
    rowGap: 16,
  },
  containerButton: {
    position: 'fixed',
    bottom: 32,
    right: 32,
  },
});

export default Boards;
