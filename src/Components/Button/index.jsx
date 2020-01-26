import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import ButtonBase from '../ButtonBase';


const Button = ({
  shape, children, color, backgroundColor, ...props
}) => {
  const classes = useStyles({
    shape,
  });
  return (
    <ButtonBase
      classes={{ root: classes.buttonRoot }}
      color={color}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.object,
  ]).isRequired,
  shape: PropTypes.oneOf([
    'square',
    'stadium',
    'round',
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertriary',
    'cardColor',
  ]),
  backgroundColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertriary',
    'cardColor',
  ]),
};

Button.defaultProps = {
  shape: 'square',
  color: 'cardColor',
  backgroundColor: 'cardColor',
};

export default Button;
