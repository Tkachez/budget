import { connect } from 'react-redux';
import Reports from './Reports';
import {
  deleteTransactionActionCreator,
  showMoreActionCreator,
  showLessActionCreator,
  getTransactionsActionCreator,
  showDeleteAlertActionCreator,
  getTotalTransactionsActionCreator,
  setPageActionCreator
} from '../../../../redux/report-reducer';

let mapStateToProps = (state) => {
  return {
    reports: state.reports
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getTransactions: (transactions) => {
      dispatch(getTransactionsActionCreator(transactions))
    },
    getTotalTransactions: (totalTransactions) => {
      dispatch(getTotalTransactionsActionCreator(totalTransactions))
    },
    setPage: (page) => {
      dispatch(setPageActionCreator(page))
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