import React from 'react';
import Chart from 'Components/Chart';
import Card from 'Components/Card';
import { plants } from 'Utils/plants';
import { useParams } from 'react-router-dom';
import { useStyles } from './styles';


const Plant = () => {
  const { id } = useParams();
  const classes = useStyles();
  const plant = plants.find((p) => p.id === id);
  return (
    <Card>
      <div className={classes.chartContainer}>
        <Chart id={id} name={plant.name} />
      </div>
    </Card>
  );
};

export default Plant;
