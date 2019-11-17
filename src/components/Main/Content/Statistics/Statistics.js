import React from 'react';
import * as axios from 'axios';
import { Pie } from 'react-chartjs-2';

export default class Statistics extends React.Component{

  componentDidMount(){
    axios.get('http://localhost:5000/transactions/all/' + this.props.statistics.health.label)
        .then(res => this.props.setHealth(res.data))
        .catch(err => console.log('Error: ' + err));
    axios.get('http://localhost:5000/transactions/all/' + this.props.statistics.food.label)
        .then(res => this.props.setFood(res.data))
        .catch(err => console.log('Error: ' + err));
    axios.get('http://localhost:5000/transactions/all/' + this.props.statistics.bills.label)
        .then(res => this.props.setBills(res.data))
        .catch(err => console.log('Error: ' + err));
    axios.get('http://localhost:5000/transactions/all/' + this.props.statistics.entertainment.label)
        .then(res => this.props.setEntertainment(res.data))
        .catch(err => console.log('Error: ' + err));
    axios.get('http://localhost:5000/transactions/all/' + this.props.statistics.alcohol.label)
        .then(res => this.props.setAlcohol(res.data))
        .catch(err => console.log('Error: ' + err));
  }

  render(){
    const props = this.props.statistics;
    console.log(props);
    return (
        <div>
          <Pie data={
            {
              labels: [
                  props.health.label,
                  props.food.label,
                  props.bills.label,
                  props.entertainment.label,
                  props.alcohol.label
              ],
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
                    props.health.value,
                    props.food.value,
                    props.bills.value,
                    props.entertainment.value,
                    props.alcohol.value
                  ]
                }
              ]
            }
          }/>
        </div>
    );
  };
};
