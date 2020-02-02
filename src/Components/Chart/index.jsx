import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';
import { database } from 'Config/firebase';

const Chart = ({ id, name }) => {
  const [data, setData] = useState();
  const theme = useTheme();
  const [labels, setLabels] = useState();

  const handleChangeValue = (res) => {
    setData(res);
  };


  const handleChangeTime = (res) => {
    setLabels(res);
  };

  useEffect(() => {
    database().ref(id).limitToLast(10).on('value', (res) => {
      const d = [];
      const t = [];
      res.forEach((r) => {
        d.push(r.val().v);
        t.push(new Date(r.val().t * 1000 - 3600000).toLocaleTimeString({
          timeZone: 'Europe/Amsterdam',
        }));
      });
      handleChangeValue(d);
      handleChangeTime(t);
    });
    return () => {

    };
  }, []);


  const config = {
    labels,
    datasets: [
      {
        label: name,
        fill: false,
        lineTension: 0.5,
        backgroundColor: theme.palette.secondary.light,
        borderColor: theme.palette.secondary.main,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: theme.palette.secondary.main,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: theme.palette.secondary.main,
        pointHoverBorderColor: theme.palette.secondary.dark,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data,
      },
    ],
  };
  return (
    <Line
      data={config}
      options={{
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                stepSize: 10,
                fontColor: theme.palette.secondary.dark,
              },
              gridLines: {
                color: theme.palette.cardColor.dark,
                zeroLineColor: theme.palette.cardColor.dark,
              },
            },
          ],
          xAxes: [{
            gridLines: {
              color: theme.palette.cardColor.dark,
              zeroLineColor: theme.palette.cardColor.dark,
            },
            ticks: {
              fontColor: theme.palette.secondary.dark,

            },
          }],
        },
      }}
    />
  );
};

Chart.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
};

Chart.defaultProps = {
  name: 'Unnamed Plant',
};

export default Chart;
