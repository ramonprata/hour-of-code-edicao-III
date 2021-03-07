import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Dialog, DialogTitle, DialogActions, DialogContent, Button } from '@material-ui/core';

const FormModal = (props) => {
  const { formTitle, formContent, handleCancel, handleSave, open } = props;
  const classes = useStyles(props);

  return (
    <Dialog open={open}>
      <DialogTitle>{formTitle}</DialogTitle>
      <DialogContent>{formContent}</DialogContent>
      <DialogActions className={classes.actionsContainer}>
        <Button onClick={handleCancel} color="default">
          Cancel
        </Button>
        <Button onClick={handleSave} color="secondary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

FormModal.propTypes = {
  formTitle: PropTypes.string,
  formContent: PropTypes.node,
  handleCancel: PropTypes.func,
  handleSave: PropTypes.func,
};

const useStyles = makeStyles({
  actionsContainer: {
    padding: 24,
  },
});

export default FormModal;
