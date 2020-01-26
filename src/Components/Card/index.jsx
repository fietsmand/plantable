import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './styles';

const Card = ({ children, className, ...props }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...props}>
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
