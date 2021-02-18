import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const ListItemTextContent = (props) => {
  const { mainText, secondaryText } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.content}>
      <span className={classes.mainText}>{mainText}</span>
      <p className={classes.text}>{secondaryText}</p>
    </div>
  );
};

ListItemTextContent.propTypes = {
  mainText: PropTypes.string,
  secondaryText: PropTypes.string,
};

const useStyles = makeStyles({
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

export default ListItemTextContent;
