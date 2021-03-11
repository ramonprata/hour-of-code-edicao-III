import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const TextInputButton = (props) => {
  const {
    onClickButton,
    showTextField,
    onChangeText,
    buttonLabel,
    textFieldLabel,
    textValue,
  } = props;

  return (
    <>
      {showTextField ? (
        <TextField
          autoFocus
          margin="dense"
          fullWidth
          label={textFieldLabel}
          type="text"
          required
          value={textValue}
          onChange={onChangeText}
        />
      ) : (
        <Button color="default" fullWidth endIcon={<AddIcon />} onClick={onClickButton}>
          {buttonLabel}
        </Button>
      )}
    </>
  );
};

TextInputButton.propTypes = {};

const useStyles = makeStyles({});

export default TextInputButton;
