import React from 'react';
import classes from './Reports.module.css';

const Reports = (props) => {
  return (
    <section className={classes.transactions}>
      {props.reports.transactions.map(transaction =>
        <div key={transaction.id} className={classes.transactions__card}>
          <div>{transaction.type}</div>
          <div>{transaction.value}</div>
        </div>
      )}
    </section>
  );
};

export default Reports;