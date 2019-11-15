import { connect } from 'react-redux';
import Reports from './Reports';
import {
  deleteTransactionActionCreator,
  loadMoreTransactionsActionCreator,
  updateButtonVisibilityActionCreator,
  setTransactionsActionCreator
} from '../../../../redux/report-reducer';

let mapStateToProps = (state) => {
  return {
    reports: state.reports
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setTransactions: (transactions) => {
      dispatch(setTransactionsActionCreator(transactions))
    },
    loadMoreTransactions: () => {
      dispatch(loadMoreTransactionsActionCreator());
    },
    updateButtonVisibility: () => {
      dispatch(updateButtonVisibilityActionCreator())
    },
    deleteTransaction: (transactionId) => {
      dispatch(deleteTransactionActionCreator(transactionId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);