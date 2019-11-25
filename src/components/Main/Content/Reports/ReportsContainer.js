import { connect } from 'react-redux';
import Reports from './Reports';
import Loader from 'react-loader-spinner';
import {
  deleteTransactionActionCreator,
  getTotalTransactionsActionCreator,
  getTransactionsActionCreator,
  setPageActionCreator, setPageLoadingActionCreator,
  showLessActionCreator,
  showMoreActionCreator
} from '../../../../redux/report-reducer';
import React from 'react';
import axios from 'axios';

class ReportsContainer extends React.Component {

  /**
   *
   */
  componentDidMount () {
    axios.get(`http://localhost:5000/transactions/all/${this.props.reports.pageLimit}/${this.props.reports.pageLimit * (
      this.props.reports.page - 1)}`).then(res => {
      this.props.getTransactions(res.data);
    }).catch(err => console.log(err));
    axios.get('http://localhost:5000/transactions/count').then(res => {
      this.props.getTotalTransactions(res.data);
      this.props.setPageLoading(false);
    }).catch(err => console.log(err));
  }

  /**
   *
   * @param page
   */
  updatePage (page) {
    this.setPageLoading(true);
    axios.get(`http://localhost:5000/transactions/all/${this.pageLimit}/${this.pageLimit * (page - 1)}`).then(res => {
      this.getTransactions(res.data);
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