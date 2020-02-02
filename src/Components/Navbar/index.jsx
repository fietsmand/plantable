import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/icons/Menu';
import Button from 'Components/Button';
import { useStyles } from './styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button color="cardColor" shape="round">
        <Menu />
      </Button>
    </div>
  );
};

Navbar.propTypes = {

};

export default Navbar;
