import { connect } from 'react-redux';
import Reports from './Reports';
import Loader from 'react-loader-spinner';
import {
  deleteTransactionActionCreator,
  getTotalTransactionsActionCreator,
  getTransactionsActionCreator,
  setPageActionCreator,
  setPageLoadingActionCreator,
  showLessActionCreator,
  showMoreActionCreator
} from '../../../../redux/report-reducer';
import React from 'react';
import { TransactionsApi } from '../../../../api/api';
class ReportsContainer extends React.Component {

  /**
   *
   */
  componentDidMount () {
    TransactionsApi.getTransactions(this.props.reports.pageLimit,this.props.reports.page)
    .then(data => this.props.getTransactions(data)).catch(err => console.log(err));
    TransactionsApi.getTransactionsCount().then(data => {
      this.props.getTotalTransactions(data);
      this.props.setPageLoading(false);
    }).catch(err => console.log(err));
  }

  /**
   *
   * @param page
   */
  updatePage (page) {
    this.setPageLoading(true);
    TransactionsApi.getTransactions(this.pageLimit,page).then(data => {
      this.getTransactions(data);
      this.setPageLoading(false);
    }).catch(err => console.log(err));
    this.setPage(page);
  }

  /**
   *
   * @return {*}
   */
  render () {
    const loaderStyles = {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    return (
      !this.props.reports.isLoading ? <Reports
        setPage = {this.props.setPage}
        setPageLoading = {this.props.setPageLoading}
        updatePage = {this.updatePage}
        getTransactions = {this.props.getTransactions}
        deleteTransaction={this.props.deleteTransaction}
        totalTransactions={this.props.reports.totalTransactions}
        transactions={this.props.reports.transactions}
        pageLimit={this.props.reports.pageLimit}
        page={this.props.reports.page}
        buttons={this.props.reports.buttons}
      /> : <Loader
        type="Oval"
        color="#5F9EA0"
        style={loaderStyles}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    reports: state.reports,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setPageLoading: (loading) => {
      dispatch(setPageLoadingActionCreator(loading));
    },
    getTransactions: (transactions) => {
      dispatch(getTransactionsActionCreator(transactions));
    },
    getTotalTransactions: (totalTransactions) => {
      dispatch(getTotalTransactionsActionCreator(totalTransactions));
    },
    setPage: (page) => {
      dispatch(setPageActionCreator(page));
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);