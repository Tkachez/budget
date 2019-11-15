import { connect } from 'react-redux';
import Reports from './Reports';
import {
  deleteTransactionActionCreator,
  loadMoreTransactionsActionCreator,
  showMoreActionCreator,
  showLessActionCreator,
  updateButtonVisibilityActionCreator,
  setTransactionsActionCreator,
  showDeleteAlertActionCreator
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
    showMore: (event) => {
      dispatch(showMoreActionCreator(event));
    },
    showLess: (event) => {
      dispatch(showLessActionCreator(event));
    },
    showDeleteAlert: (event) => {
      dispatch(showDeleteAlertActionCreator(event));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);