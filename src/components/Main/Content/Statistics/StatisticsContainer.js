import { connect } from 'react-redux';
import Statistics from './Statistics';
import {
  showAlcoholCountActionCreator,
  showBillsCountActionCreator,
  showEntertainmentCountActionCreator,
  showFoodCountActionCreator,
  showHealthCountActionCreator
} from '../../../../redux/statistics-reducer';

let mapStateToProps = (state) => {
  return {
    statistics: state.statistics
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    showHealth: (data) => {
      dispatch(showHealthCountActionCreator(data))
    },
    showFood: (data) => {
      dispatch(showFoodCountActionCreator(data))
    },
    showEntertainment: (data) => {
      dispatch(showEntertainmentCountActionCreator(data))
    },
    showBills: (data) => {
      dispatch(showBillsCountActionCreator(data))
    },
    showAlcohol: (data) => {
      dispatch(showAlcoholCountActionCreator(data))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);