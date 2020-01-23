import React from 'react';
import Chart from 'Components/Chart';
import Card from 'Components/Card';
import { useStyles } from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <Chart />
      </Card>
    </div>
  );
};

export default App;
