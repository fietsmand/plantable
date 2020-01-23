import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { database } from '../../config/firebase';

const Chart = () => {
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
    database().ref('moisture_1').limitToLast(10).on('value', (res) => {
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
        label: 'Peter The Plant',
        fill: false,
        lineTension: 0.5,
        backgroundColor: theme.palette.tertriary.light,
        borderColor: theme.palette.tertriary.main,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: theme.palette.tertriary.main,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: theme.palette.tertriary.main,
        pointHoverBorderColor: theme.palette.tertriary.dark,
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
                max: 1050,
                stepSize: 50,
                fontColor: theme.palette.cardColor.dark,
              },
              gridLines: {
                color: theme.palette.cardColor.dark,
                zeroLineColor: theme.palette.cardColor.dark,
                // color: 'rgb(255, 255, 255, 1)',
              },
            },
          ],
          xAxes: [{
            gridLines: {
              color: theme.palette.cardColor.dark,
              zeroLineColor: theme.palette.cardColor.dark,
            },
            ticks: {
              fontColor: theme.palette.cardColor.dark,
            },
          }],
        },
      }}
    />
  );
};

export default Chart;
