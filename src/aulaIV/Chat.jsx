import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { paletteColors } from '../shared/consts';

const Chat = () => {
  const classes = useStyles();

  return <div className={classes.container}>Chat</div>;
};

Chat.propTypes = {};

const useStyles = makeStyles({
  container: {
    minHeight: '20vh',
    backgroundColor: paletteColors.primary,
  },
});

export default Chat;
