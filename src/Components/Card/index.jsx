import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

const Card = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        children
      }
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object,
  ]).isRequired,
};

export default Card;
