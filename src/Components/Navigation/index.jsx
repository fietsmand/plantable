import React from 'react';
import PropTypes from 'prop-types';
import Card from 'Components/Card';
import { useStyles } from './styles';

const Navigation = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      Hello
    </Card>
  );
};

Navigation.propTypes = {

};

export default Navigation;
