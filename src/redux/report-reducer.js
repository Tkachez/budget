const LOAD_MORE_TRANSACTIONS = 'LOAD_MORE_TRANSACTIONS';
const EDIT_TRANSACTION = 'EDIT_TRANSACTION';
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const SHOW_MORE = 'SHOW_MORE';
const TRANSACTIONS_PER_PAGE = 4;

let initialState = {
  transactions: [
    {id: 1, expanded:false, icon:'', type:'health', value: 20, comment:'Pharmacy, Pool', date:''},
    {id: 2, expanded:false, icon:'', type:'food', value: 10, comment:'Apples, Juice', date:''},
    {id: 3, expanded:false, icon:'', type:'health', value: 5, comment:'Pharmacy', date:''},
    {id: 4, expanded:false, icon:'', type:'entertainment', value: 25, comment:'', date:''},
    {id: 5, expanded:false, icon:'', type:'food', value: 10, comment:'Nuts', date:''},
    {id: 6, expanded:false, icon:'', type:'bills', value: 60, comment:'Flat', date:''}
  ],
  transactionsPerPage: TRANSACTIONS_PER_PAGE,
  button: {
    value: 'Load More',
    loading: false
  }
};

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MORE_TRANSACTIONS: {
      return {
        ...state,
        transactions: [...state.transactions, ...action.newTransactions]
      }
    }
    case EDIT_TRANSACTION: {
      return {
        ...state,
        transactions: state.transactions.map(transaction =>
           transaction.id === action.transactionId ? transaction[action.fieldId] = action.value : transaction
        )
      }
    }
    case DELETE_TRANSACTION: {
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.transactionId)
      }
    }
    case SHOW_MORE: {
      return {
        ...state,
        transactions: state.transactions.map(transaction =>
          transaction.id === action.transactionId ? transaction.expanded = true : transaction
        )
      }
    }

    default:{
      return state;
    }
  }
};

export const loadMoreTransactionsActionCreator = (newTransactions) => {
  return (
    {
      type: LOAD_MORE_TRANSACTIONS,
      newTransactions
    }
  );
};

export const deleteTransactionActionCreator = (transactionId) => {
  return (
    {
      type: DELETE_TRANSACTION,
      transactionId
    }
  );
};

export const showMoreActionCreator = (transactionId) => {
  return (
    {
      type: SHOW_MORE,
      transactionId
    }
  );
};

export const editTransactionActionCreator = (transactionId, fieldId, value) => {
  return (
    {
      type: EDIT_TRANSACTION,
      fieldId,
      value,
      transactionId
    }
  );
};

export default reportsReducer;