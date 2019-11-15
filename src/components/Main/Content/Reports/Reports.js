import React from 'react';
import * as axios from 'axios';
import classes from './Reports.module.css';

const Reports = (props) => {
  console.log(props.reports.transactions);
  if (props.reports.transactions.length === 0) {
    axios.get('http://localhost:5000/transactions').then(res => {
        props.setTransactions(res.data);
      }
    ).catch(err => console.log(err));
  }
  /**
   *
   */
  let transactions = props.reports.transactions.map((transaction, index) => {
    if (index < (
      props.reports.transactionsPerPage * props.reports.page
    )) {
      return (
        <div key={transaction._id} className={`${classes.card}`}>
          <div className={classes.type}>Type: {transaction.option}</div>
          <div className={classes.value}>Value: {transaction.value}</div>
          <div className={classes.comment}>Comment: {transaction.comment}</div>
          <div className={classes.buttons}>
            <button className={`${classes.show} ${transaction._id}`} onClick={props.showMore}>{props.reports.buttons.showMore.label}</button>
            <button className={`${classes.delete} ${transaction._id}`} onClick={props.deleteTransaction}>{props.reports.buttons.delete.label}</button>
          </div>
        </div>
      );
    }
    return false;
  });

  /**
   *
   */
  let onClick = () => {
    props.loadMoreTransactions();
    props.updateButtonVisibility();
  };

  /**
   *
   * @type {boolean}
   */
  let buttonVisibility = !(
    props.reports.transactionsPerPage === props.reports.transactions.length || !props.reports.buttons.loadMore.visible
  );


  /**
   *
   */
  return (
    <section className={classes.wrapper}>
      {transactions.length ? transactions : <div>There are no transactions yet</div>}
      {buttonVisibility &&
      <button onClick={onClick}>Load More</button>}
    </section>
  );
};

export default Reports;