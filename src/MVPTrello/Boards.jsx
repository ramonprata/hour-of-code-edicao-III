import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { DefaultPage, FormModal } from '../shared/Components';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import BoardCard from './BoardCard';
import BoardForm from './BoardForm';
import { useLocation, useHistory } from 'react-router-dom';

const Boards = (props) => {
  const {} = props;
  const classes = useStyles(props);
  const [showFormBoard, setShowFormBoard] = useState(false);

  const location = useLocation();
  const history = useHistory();

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

  const handleSave = () => {
    alert('salvar o board');
    setShowFormBoard(false);
  };

  const handleCancel = () => {
    setShowFormBoard(false);
  };

  return (
    <DefaultPage title="Boards" contentHeader={renderButton()}>
      <div className={classes.container}>
        <div className={classes.boardsContainer}>
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </div>
      </div>
      <FormModal
        formTitle="New board"
        open={showFormBoard}
        formContent={<BoardForm />}
        handleSave={handleSave}
        handleCancel={handleCancel}
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
    overflow: 'auto',
    maxHeight: 'calc(100vh - 180px)',
  },
  boardsContainer: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    padding: '8px 0',
    justifyItems: 'center',
    rowGap: 16,
  },
});

export default Boards;
