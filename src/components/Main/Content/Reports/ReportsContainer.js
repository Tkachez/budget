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
import React from 'react';
import * as axios from 'axios';

class ReportsContainer extends React.Component {
  /**
   *
   * @param prevProps
   */
  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      axios.get('http://localhost:5000/transactions/all/' +
        this.props.pageLimit + '/' + this.props.pageLimit * (this.props.page - 1))
      .then(res => {
        this.props.getTransactions(res.data);
      }).catch(err => console.log(err));
    }
  }

  /**
   *
   */
  componentDidMount() {
    axios.get('http://localhost:5000/transactions/all/' +
      this.props.pageLimit + '/' + this.props.pageLimit * (this.props.page - 1))
    .then(res => {
      this.props.getTransactions(res.data);
    }).catch(err => console.log(err));
    axios.get('http://localhost:5000/transactions/count').then(res => {
      this.props.getTotalTransactions(res.data)
    }).catch(err => console.log(err));
  }

  render () {
    return <Reports
      setPage={this.props.setPage}
      deleteTransaction={this.props.deleteTransaction}
      totalTransactions={this.props.totalTransactions}
      transactions={this.props.transactions}
      pageLimit={this.props.pageLimit}
      page={this.props.page}
      buttons={this.props.buttons}
    />;
  }
}

let mapStateToProps = (state) => {
  return {
    reports: state.reports,
    totalTransactions: state.reports.totalTransactions,
    transactions: state.reports.transactions,
    page: state.reports.page,
    pageLimit: state.reports.pageLimit,
    buttons: state.reports.buttons
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

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);