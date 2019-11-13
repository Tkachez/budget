import React from 'react';
import classes from './Reports.module.css';

const Reports = (props) => {

  /**
   *
   */
  let transactionsPerPage = props.reports.transactions.map((transaction, index) => {
    if (index < (
      props.reports.transactionsPerPage * props.reports.page
    )) {
      return (
        !transaction.expanded ?
          <div key={transaction.id} className={classes.card}>
            {transaction.icon}
            <div className={classes.type}>Type: {transaction.type}</div>
            <button className={`${classes.show} ${transaction.id}`} onClick={props.showMore}>{props.reports.buttons.showMore.label}</button>
            <button className={`${classes.delete} ${transaction.id}`} onClick={props.deleteTransaction}>{props.reports.buttons.delete.label}</button>
            <div className={classes.value}>Value: {transaction.value}</div>
          </div> :
          <div key={transaction.id} className={`${classes.card} ${classes.expanded}`}>
            {transaction.icon}
            <div className={classes.type}>Type: {transaction.type}</div>
            <button className={`${classes.hide} ${transaction.id}`} onClick={props.showLess}>{props.reports.buttons.showLess.label}</button>
            <button className={`${classes.delete} ${transaction.id}`} onClick={props.deleteTransaction}>{props.reports.buttons.delete.label}</button>
            <div className={classes.value}>Value: {transaction.value}</div>
            <div className={classes.comment}>Comment: {transaction.comment}</div>
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
      {transactionsPerPage}
      {buttonVisibility &&
      <button onClick={onClick}>Load More</button>}
    </section>
  );
};

export default Reports;