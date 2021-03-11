import React, { useState } from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { FormModal } from '../shared/Components';
import TrelloRepository from './TrelloRepository';

const TrelloRepo = new TrelloRepository();

const BoardForm = (props) => {
  const { showFormBoard, closeModal } = props;
  const [newBoard, setNewBoard] = useState({
    boardName: '',
    boardDescription: '',
  });

  const handleChange = (field, value) => {
    setNewBoard({
      ...newBoard,
      [field]: value,
    });
  };

  const onSaveBoard = async () => {
    const boardSave = {
      id: uniqid(),
      ...newBoard,
    };
    TrelloRepo.saveBoard(boardSave);
    closeModal();
  };

  const classes = useStyles(props);

  const renderFormContent = () => (
    <>
      <TextField
        autoFocus
        margin="dense"
        fullWidth
        id="boardName"
        label="Board Name"
        type="text"
        required
        value={newBoard.boardName}
        onChange={(e) => handleChange('boardName', e.target.value)}
      />
      <TextField
        margin="dense"
        id="boardDescription"
        label="Board Description"
        type="text"
        fullWidth
        multiline
        rows={4}
        value={newBoard.boardDescription}
        onChange={(e) => handleChange('boardDescription', e.target.value)}
      />
    </>
  );

  return (
    <FormModal
      formTitle="New board"
      open={showFormBoard}
      formContent={renderFormContent()}
      handleSave={onSaveBoard}
      handleCancel={closeModal}
    />
  );
};

BoardForm.propTypes = {};

const useStyles = makeStyles({});

export default BoardForm;
