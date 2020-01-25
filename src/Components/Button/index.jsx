import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';


const Button = () => {
  const classes = useStyles('tertriary');
  return (
    <button className={classes.root} type="button">
      {/* Button */}
    </button>
  );
};

Button.propTypes = {

};

export default Button;
