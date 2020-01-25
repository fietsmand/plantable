import React from 'react';
import Chart from 'Components/Chart';
import Card from 'Components/Card';
import Button from 'Components/Button';
import { useStyles } from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <div className={classes.chartContainer}>
          <Chart />

        </div>
        <Button />
      </Card>
    </div>
  );
};

export default App;
