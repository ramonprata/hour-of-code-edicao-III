import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { paletteColors } from '../shared/consts';
import GenericList from './GenericList';
import ChatItem from './ChatItem';
import { chatData } from '../shared/mocks/chat.mock';
import SearchInput from './SearchInput';

const Chat = () => {
  const classes = useStyles();

  const renderChatItem = (item) => {
    return <ChatItem user={item} />;
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>Chat</header>
      <div className={classes.content}>
        <SearchInput />
        <GenericList items={chatData} renderItem={(item) => renderChatItem(item)} uniqKey="id" />
      </div>
    </div>
  );
};

Chat.propTypes = {};

const useStyles = makeStyles({
  container: {
    backgroundColor: paletteColors.primary,
  },
  header: {
    marginBottom: 16,
  },
  content: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: '0 0 8px 8px',
  },
});

export default Chat;
