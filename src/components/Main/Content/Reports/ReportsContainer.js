import { connect } from 'react-redux';
import Reports from './Reports';
import { deleteTransactionActionCreator, loadMoreTransactionsActionCreator, showMoreActionCreator, editTransactionActionCreator } from '../../../../redux/report-reducer';

let mapStateToProps = (state) => {
  return {
    reports: state.reports
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    loadMoreTransactions: (transactions) => {
      dispatch(loadMoreTransactionsActionCreator(transactions));
    },
    editTransaction: (transactionId) => {
      dispatch(editTransactionActionCreator(transactionId));
    },
    deleteTransaction: (transactionId) => {
      dispatch(deleteTransactionActionCreator(transactionId));
    },
    showMore: (transactionId) => {
      dispatch(showMoreActionCreator(transactionId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);