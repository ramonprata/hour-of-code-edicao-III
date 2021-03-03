import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { DefaultPage } from '../shared/Components';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import BoardCard from './BoardCard';

const Boards = (props) => {
  const {} = props;
  const classes = useStyles(props);

  const renderButton = () => {
    return (
      <Button
        onClick={() => alert('clicked')}
        variant="contained"
        color="default"
        endIcon={<AddIcon />}
      >
        Add board
      </Button>
    );
  };

  return (
    <DefaultPage title="Boards" contentHeader={renderButton()}>
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
    padding: '16px 0',
    justifyItems: 'center',
    rowGap: 16,
  },
});

export default Boards;
