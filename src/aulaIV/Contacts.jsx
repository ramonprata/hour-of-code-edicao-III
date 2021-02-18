import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { paletteColors } from '../shared/consts';
import { contacts } from '../shared/mocks/contacts.mock';
import ListItemTextContent from './ListItemTextContent';
import GenericList from './GenericList';

const Contacts = () => {
  const classes = useStyles();

  const renderChatItem = (contact) => {
    return (
      <div className={classes.itemContainer}>
        <ListItemTextContent mainText={contact.contactName} secondaryText={contact.phoneNumber} />
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <header>Contacts</header>
      <div className={classes.content}>
        <GenericList items={contacts} renderItem={(item) => renderChatItem(item)} uniqKey="id" />
      </div>
    </div>
  );
};

Contacts.propTypes = {};

const useStyles = makeStyles({
  container: {
    minHeight: '20vh',
    backgroundColor: paletteColors.secondary,
  },
  content: {
    padding: 8,
  },
  itemContainer: {
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 0,
    borderBottom: '1px solid #ddd',
    '& *': {
      color: '#000',
    },
  },
});

export default Contacts;
