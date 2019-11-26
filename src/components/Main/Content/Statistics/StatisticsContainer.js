import React from 'react';
import { connect } from 'react-redux';
import Statistics from './Statistics';
import Loader from 'react-loader-spinner';
import {
  onPageLoadedActionCreator,
  setAlcoholActionCreator,
  setBillsActionCreator,
  setEntertainmentActionCreator,
  setFoodActionCreator,
  setHealthActionCreator
} from '../../../../redux/statistics-reducer';
import axios from 'axios';

class StatisticsContainer extends React.Component {

  componentDidMount(){
    let url = 'http://localhost:5000/transactions/all/';
    axios.get(url + this.props.statistics.health.label)
    .then(res => this.props.setHealth(res.data))
    .catch(err => console.log('Error: ' + err));
    axios.get(url + this.props.statistics.food.label)
    .then(res => this.props.setFood(res.data))
    .catch(err => console.log('Error: ' + err));
    axios.get(url + this.props.statistics.bills.label)
    .then(res => this.props.setBills(res.data))
    .catch(err => console.log('Error: ' + err));
    axios.get(url + this.props.statistics.entertainment.label)
    .then(res => this.props.setEntertainment(res.data))
    .catch(err => console.log('Error: ' + err));
    axios.get(url + this.props.statistics.alcohol.label)
    .then(res => {
      this.props.setAlcohol(res.data);
      this.props.onPageLoaded();
    })
    .catch(err => console.log('Error: ' + err));
  }

  render(){
    const loaderStyles = {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    return (
      !this.props.statistics.isLoading ?
        <Statistics
          health={this.props.statistics.health}
          food={this.props.statistics.food}
          bills={this.props.statistics.bills}
          entertainment={this.props.statistics.entertainment}
          alcohol={this.props.statistics.alcohol}
        /> : <Loader
          type="Oval"
          color="#5F9EA0"
          style={loaderStyles}
        />
    );
  };
}

let mapStateToProps = (state) => {
  return {
    statistics: state.statistics
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onPageLoaded: () => {
      dispatch(onPageLoadedActionCreator())
    },
    setHealth: (health) => {
      dispatch(setHealthActionCreator(health))
    },
    setFood: (food) => {
      dispatch(setFoodActionCreator(food))
    },
    setBills: (bills) => {
      dispatch(setBillsActionCreator(bills))
    },
    setEntertainment: (entertainment) => {
      dispatch(setEntertainmentActionCreator(entertainment))
    },
    setAlcohol: (alcohol) => {
      dispatch(setAlcoholActionCreator(alcohol))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsContainer);