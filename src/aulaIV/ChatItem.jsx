import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const ChatItem = (props) => {
  const { user } = props;
  const classes = useStyles(props);
  const {} = classes;

  return (
    <div className={classes.itemContainer}>
      <div className={classes.avatar}>
        <img src={user.avatar} alt={user.userName} />
      </div>

      <div className={classes.content}>
        <span className={classes.mainText}>{user.userName}</span>
        <p className={classes.text}>{user.briefText}</p>
      </div>
    </div>
  );
};

ChatItem.propTypes = {};

const useStyles = makeStyles({
  itemContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    columnGap: 8,
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(90%)',
    },
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > img': {
      height: 48,
      width: 48,
      borderRadius: '50%',
    },
  },
  content: {
    padding: 4,
    width: 200,
    textAlign: 'left',
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222429',
    display: 'block',
  },
  text: {
    fontSize: 14,
    color: '#ccc',
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export default ChatItem;
