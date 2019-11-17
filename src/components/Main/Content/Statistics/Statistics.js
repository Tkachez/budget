import React from 'react';
// import * as axios from 'axios';
import { Pie } from 'react-chartjs-2';

export default class Statistics extends React.Component{

  componentDidMount(){
    this.props.showStatistics();
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
                    props.health.food,
                    props.health.bills,
                    props.health.entertainment,
                    props.health.alcohol
                  ]
                }
              ]
            }
          }/>
        </div>
    );
  };
};
