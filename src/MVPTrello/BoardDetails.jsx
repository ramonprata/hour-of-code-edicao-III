import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useLocation, useHistory } from 'react-router-dom';
const BoardDetails = (props) => {
  const {} = props;
  const classes = useStyles(props);

  const location = useLocation();
  const history = useHistory();

  console.log('location :>> ', location);
  console.log('history :>> ', history);

  return <div className={classes.container}>BoardDetails</div>;
};

BoardDetails.propTypes = {};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
});

export default BoardDetails;
