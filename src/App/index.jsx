import React from 'react';
import Navbar from 'Components/Navbar';
import Views from 'Views';
import { useStyles } from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Navigation /> */}
      <Navbar />
      <Views />
    </div>
  );
};

export default App;
