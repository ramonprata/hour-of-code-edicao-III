import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const GenericList = (props) => {
  const { items, renderItem, uniqKey } = props;

  return items.map((item) => (
    <React.Fragment key={item[uniqKey]}>{renderItem(item)}</React.Fragment>
  ));
};

GenericList.propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.func,
  uniqKey: PropTypes.string,
};

const useStyles = makeStyles({});

export default GenericList;
