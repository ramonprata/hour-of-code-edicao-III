import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const SearchInput = (props) => {
  const { onTyping, searchText } = props;
  const classes = useStyles(props);
  const {} = classes;

  const handleChange = (event) => {
    const text = event.target.value;

    if (onTyping) {
      onTyping(text);
    }
  };

  return (
    <input
      type="text"
      className={classes.input}
      value={searchText}
      onChange={handleChange}
      placeholder="Search.."
    />
  );
};

SearchInput.propTypes = {
  onTyping: PropTypes.func,
  searchText: PropTypes.string,
};

const useStyles = makeStyles({
  input: {
    border: 'none',
    outline: 'none',
    width: '100%',
    height: 48,
    backgroundColor: '#f1f1f1',
    fontSize: 14,
    '&::placeholder': {
      color: '#bbb',
    },
  },
});

export default SearchInput;
