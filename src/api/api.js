import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/transactions/',
  timeout: 5000,
});

export const TransactionsApi = {
  getTransactions (pageLimit,page) {
    return instance.get(`all/${pageLimit}/${pageLimit * (page - 1)}`).then(response => response.data);
  },
  getTransactionsCount () {
    return instance.get(`count`).then(response => response.data);
  },
  addTransaction() {
    return instance.post(``).then(response => response.data);
  }
};

