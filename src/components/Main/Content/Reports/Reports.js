import React from 'react';
import * as axios from 'axios';
import classes from './Reports.module.css';

export default class Reports extends React.Component {
    /**
     *
     * @param prevProps
     */
    componentDidUpdate(prevProps) {
        if (prevProps.reports.page !== this.props.reports.page) {
            axios.get('http://localhost:5000/transactions/all/' +
                this.props.reports.pageLimit + '/' + this.props.reports.pageLimit * (this.props.reports.page - 1))
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
            this.props.reports.pageLimit + '/' + this.props.reports.pageLimit * (this.props.reports.page - 1))
            .then(res => {
                this.props.getTransactions(res.data);
            }).catch(err => console.log(err));
        axios.get('http://localhost:5000/transactions/count').then(res => {
            this.props.getTotalTransactions(res.data)
        }).catch(err => console.log(err));
    }

    /**
     *
     * @returns {*}
     */
    render() {
        let totalPages = Math.ceil(this.props.reports.totalTransactions / this.props.reports.pageLimit);
        let pages = [];
        for (let i = 1; i <= totalPages; ++i) {
            pages.push(i);
        }
        return (
            <section className={classes.wrapper}>
                <div>
                    {pages.map(page => <button onClick={this.props.setPage} key={page}>{page}</button>)}
                </div>
                {this.props.reports.transactions.length ? this.props.reports.transactions.map((transaction, index) => {
                        if (index < (this.props.reports.pageLimit * this.props.reports.page)) {
                            return (
                                <div key={transaction._id} className={`${classes.card}`}>
                                    <div className={classes.type}>Type: {transaction.option}</div>
                                    <div className={classes.value}>Value: {transaction.value}</div>
                                    <div className={classes.comment}>Comment: {transaction.comment}</div>
                                    <div className={classes.buttons}>
                                        <button className={`${classes.show} ${transaction._id}`}
                                                onClick={this.props.showMore}>{this.props.reports.buttons.showMore.label}</button>
                                        <button className={`${classes.delete} ${transaction._id}`}
                                                onClick={this.props.deleteTransaction}>{this.props.reports.buttons.delete.label}</button>
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
};




