import { connect } from 'react-redux';
import { compose } from 'redux';
import Reports from './Reports';
import Loader from 'react-loader-spinner';
import {
  deleteTransaction,
  getTotalTransactions,
  getTransactions,
  setPage,
  setPageLoading,
  showLess,
  showMore
} from '../../../../redux/report-reducer';
import React from 'react';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';

class ReportsContainer extends React.Component {

  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.updatePage = this.updatePage.bind(this);
  }
  /**
   *
   */
  componentDidMount () {
    this.props.getTransactions(this.props.reports.pageLimit,this.props.reports.page);
    this.props.getTotalTransactions();
  }

  /**
   *
   * @param page
   */
  updatePage (page) {
    this.props.setPageLoading(true);
    this.props.getTransactions(this.props.reports.pageLimit,page);
    this.props.setPage(page);
  }

  /**
   *
   * @return {*}
   */
  render () {

    /**
     *
     * @type {{alignItems: string, display: string, width: string, justifyContent: string, height: string}}
     */
    const loaderStyles = {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    /**
     *
     */
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

/**
 *
 * @param state
 * @returns {{reports: reportsReducer}}
 */
let mapStateToProps = (state) => {
  return {
    reports: state.reports
  };
};


export default compose(
  connect(mapStateToProps, {
    getTotalTransactions,
    getTransactions,
    deleteTransaction,
    setPage,
    setPageLoading,
    showLess,
    showMore
  }),
  withAuthRedirect
)(ReportsContainer);