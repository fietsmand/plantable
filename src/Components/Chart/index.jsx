import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { database } from '../../config/firebase';

const Chart = () => {
useEffect(() => {
    database().ref('moisture_1').limitToLast(10).on('value', res => {
        const d = [];
        const t = [];
        res.forEach((r) => {          
            d.push(r.val().v);
            t.push(new Date(r.val().t * 1000 - 3600000).toLocaleTimeString({
                timeZone: 'Europe/Amsterdam'
            }))
        });
        handleChangeValue(d)
        handleChangeTime(t)
        
    })
    return () => {
        
    };
}, [])

    const [data, setData] = useState();

    const [labels, setLabels] = useState();


    const handleChangeValue = (res) => {
        setData(res)
    }
   
    

    const handleChangeTime = (res) => {
        setLabels(res)
    }
   
    
const config = {
    labels: labels,
    datasets: [
      {
        label: 'Moisture Sensor 1',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data,
      }
    ]
  };
    return (
        <Line 
            data={config}
            options={{
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 1050,
                                stepSize: 50
                            }
                        }
                    ]
                }
            }}
        />
    )
}

export default Chart
