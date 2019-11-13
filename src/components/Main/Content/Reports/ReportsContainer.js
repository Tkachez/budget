import { connect } from 'react-redux';
import Reports from './Reports';
import {
  deleteTransactionActionCreator,
  loadMoreTransactionsActionCreator,
  showMoreActionCreator,
  showLessActionCreator,
  editTransactionActionCreator,
  updateButtonVisibilityActionCreator,
} from '../../../../redux/report-reducer';

let mapStateToProps = (state) => {
  return {
    reports: state.reports
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    loadMoreTransactions: () => {
      dispatch(loadMoreTransactionsActionCreator());
    },
    updateButtonVisibility: () => {
      dispatch(updateButtonVisibilityActionCreator())
    },
    editTransaction: (transactionId) => {
      dispatch(editTransactionActionCreator(transactionId));
    },
    deleteTransaction: (transactionId) => {
      dispatch(deleteTransactionActionCreator(transactionId));
    },
    showMore: (event) => {
      dispatch(showMoreActionCreator(event));
    },
    showLess: (event => {
      dispatch(showLessActionCreator(event));
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);