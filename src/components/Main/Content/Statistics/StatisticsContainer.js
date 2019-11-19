import { connect } from 'react-redux';
import Statistics from './Statistics';
import {
  setAlcoholActionCreator,
  setBillsActionCreator,
  setEntertainmentActionCreator,
  setFoodActionCreator,
  setHealthActionCreator
} from "../../../../redux/statistics-reducer";


let mapStateToProps = (state) => {
  return {
    statistics: state.statistics,
    transactions: state.reports
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);