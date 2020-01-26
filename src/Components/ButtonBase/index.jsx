import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './styles';


const ButtonBase = ({
  children, onClick, classes: propsClasses, backgroundColor,
}) => {
  console.log('🚀: ButtonBase -> propsClasses', propsClasses);
  const classes = useStyles({ color: 'tertriary', backgroundColor });
  return (
    <button className={clsx(classes.root, propsClasses.root)} onClick={onClick} type="button">
      {children}
    </button>
  );
};

ButtonBase.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.object,
  ]).isRequired,
  onClick: PropTypes.func,
  classes: PropTypes.instanceOf(Object),
  backgroundColor: PropTypes.string.isRequired,
};

ButtonBase.defaultProps = {
  onClick: null,
  classes: {},
};

export default ButtonBase;
