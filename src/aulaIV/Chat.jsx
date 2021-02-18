import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { paletteColors } from '../shared/consts';
import GenericList from './GenericList';
import ChatItem from './ChatItem';
import { chatData } from '../shared/mocks/chat.mock';

const Chat = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');

  const renderChatItem = (item) => {
    return <ChatItem user={item} />;
  };

  const filteredChats = chatData.filter((chat) =>
    chat.userName.toUpperCase().includes(searchText.toUpperCase())
  );

  return (
    <div className={classes.container}>
      <header className={classes.header}>Chat</header>
      <div className={classes.content}>
        <GenericList
          items={filteredChats}
          renderItem={(item) => renderChatItem(item)}
          uniqKey="id"
          searchText={searchText}
          onSearch={(text) => setSearchText(text)}
        />
      </div>
    </div>
  );
};

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
    height: '30vh',
    minWidth: 320,
    overflowY: 'auto',
  },
});

export default Chat;
