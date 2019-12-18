import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/transactions/',
  timeout: 5000,
});

/**
 *
 * @type {{getTransactions(*, *): Promise<*>, addTransaction(): Promise<*>, getTransactionsCount(): Promise<*>}}
 */
export const TransactionsApi = {
  getTransactions (user_id,pageLimit,page) {
    return instance.get(`user/${user_id}/${pageLimit}/${pageLimit * (page - 1)}`).then(response => response.data);
  },
  getTransactionsCount () {
    return instance.get(`count`).then(response => response.data);
  },
  deleteTransaction(transactionId) {
    return instance.delete(`${transactionId}`).then(response => response.data);
  }
};

