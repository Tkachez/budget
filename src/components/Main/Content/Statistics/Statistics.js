import React from 'react';
import * as axios from 'axios';
import { Pie } from 'react-chartjs-2';

const Statistics = (props) => {
  let healthCount = () => {
    axios.get('http://localhost:5000/transactions/all/' + props.statistics.health.label).then(res => {
      props.showHealth(res.data);
    }).catch(err => console.log(err));
  };

  let foodCount = () => {
    axios.get('http://localhost:5000/transactions/all/' + props.statistics.food.label).then(res => {
      props.showFood(res.data);
    }).catch(err => console.log(err));
  };

  let billsCount = () => {
    axios.get('http://localhost:5000/transactions/all/' + props.statistics.bills.label).then(res => {
      props.showBills(res.data);
    }).catch(err => console.log(err));
  };

  let entertainmentCount = () => {
    axios.get('http://localhost:5000/transactions/all/' + props.statistics.entertainment.label).then(res => {
      props.showEntertainment(res.data);
    }).catch(err => console.log(err));
  };

  let alcoholCount = () => {
    axios.get('http://localhost:5000/transactions/all/' + props.statistics.alcohol.label).then(res => {
      props.showAlcohol(res.data);
    }).catch(err => console.log(err));
  };

  return (
    <div>
      <Pie data={
        {
          labels: ['Health', 'Food', 'Bills',
                   'Entertainment', 'Alcohol'],
          datasets: [
            {
              label: 'Rainfall',
              backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
              ],
              hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
              ],
              data: [
                healthCount,
                foodCount,
                billsCount,
                entertainmentCount,
                alcoholCount
              ]
            }
          ]
        }
      }/>
    </div>
  );
};

export default Statistics;
