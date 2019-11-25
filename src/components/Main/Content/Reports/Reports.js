import React from 'react';
import classes from './Reports.module.css';

const Reports = (props) => {

  /**
   *
   * @type {number}
   */
  let totalPages = Math.ceil(props.totalTransactions / props.pageLimit);

  /**
   *
   * @type {Array}
   */
  let pages = [];

  for (let i = 1; i <= totalPages; ++i) {
    pages.push(i);
  }

  /**
   *
   */
  return (
    <section className={classes.wrapper}>
      <div>
        {pages.map(
          page => <button className={props.page === page ? classes.selected : ''} onClick={() => props.updatePage(page)} key={page}>{page}</button>)}
      </div>
      {props.transactions.length ? props.transactions.map((transaction, index) => {
          if (index < (
            props.pageLimit * props.page
          )) {
            return (
              <div key={transaction._id} className={`${classes.card}`}>
                <div className={classes.type}>Type: {transaction.option}</div>
                <div className={classes.value}>Value: {transaction.value}</div>
                <div className={classes.comment}>Comment: {transaction.comment}</div>
                <div className={classes.buttons}>
                  <button className={`${classes.show} ${transaction._id}`}
                          onClick={props.showMore}>{props.buttons.showMore.label}</button>
                  <button className={`${classes.delete} ${transaction._id}`}
                          onClick={props.deleteTransaction}>{props.buttons.delete.label}</button>
                </div>
              </div>
            );
          }
          return null;
        }
      ) : <div>There are no transactions yet</div>}
    </section>
  );    
};

export default Reports;




