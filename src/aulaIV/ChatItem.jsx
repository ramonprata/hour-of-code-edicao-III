import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ListItemTextContent from './ListItemTextContent';

const ChatItem = (props) => {
  const { user } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.itemContainer} onClick={() => alert(user.userName)}>
      <div className={classes.avatar}>
        <img src={user.avatar} alt={user.userName} />
      </div>
      <ListItemTextContent mainText={user.userName} secondaryText={user.briefText} />
    </div>
  );
};

ChatItem.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    userName: PropTypes.string,
    briefText: PropTypes.string,
  }),
};

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
});

export default ChatItem;
