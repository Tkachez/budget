import { connect } from 'react-redux';
import Statistics from './Statistics';
import {
  showStatisticsActionCreator
} from '../../../../redux/statistics-reducer';

let mapStateToProps = (state) => {
  return {
    statistics: state.statistics
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    showStatistics: (data) => {
      dispatch(showStatisticsActionCreator(data))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);