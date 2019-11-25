import axios from 'axios';

const SET_PAGE_LOADING = 'SET_PAGE_LOADING';
const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
const SET_PAGE = 'SET_PAGE';
const GET_TOTAL_TRANSACTIONS= 'GET_TOTAL_PAGES';
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const SHOW_MORE = 'SHOW_MORE';
const SHOW_LESS = 'SHOW_LESS';
const SHOW_DELETE_ALERT = 'SHOW_DELETE_ALERT';
const TRANSACTIONS_PER_PAGE = 3;

let initialState = {
  isLoading: true,
  transactions: [],
  totalTransactions: 0,
  pageLimit: TRANSACTIONS_PER_PAGE,
  page: 1,
  buttons: {
    showMore: {
      label: 'Show More',
      loading: false
    },
    showLess: {
      label: 'Show Less',
      loading: false
    },
    delete: {
      label: 'Delete',
      loading: false
    },
  }
};

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_LOADING: {
      return {
        ...state,
        isLoading: action.loading
      }
    }
    case GET_TRANSACTIONS: {
      return {
        ...state,
        transactions: action.transactions
      };
    }
    case GET_TOTAL_TRANSACTIONS: {
      return {
        ...state,
        totalTransactions: action.totalTransactions
      }
    }
    case SET_PAGE: {
      return {
        ...state,
        page: action.page
      }
    }
    case DELETE_TRANSACTION: {
      return {
        ...state,
        transactions: state.transactions.filter(transaction => {
          if(action.target.classList.contains(transaction._id)){
            axios.delete('http://localhost:5000/transactions/' + transaction._id)
            .catch(err => console.log(err));
          }
          return !action.target.classList.contains(transaction._id)
        })
      }
    }
    case SHOW_MORE: {
      return {
        ...state,
        transactions: state.transactions.map(transaction => {
          if(action.target.classList.contains(transaction._id)){
            return  {...transaction, expanded: true }
          }
          return transaction
        }

        )
      }
    }
    case SHOW_LESS: {
      return {
        ...state,
        transactions: state.transactions.map(transaction => {
          if(action.target.classList.contains(transaction._id)){
            return {...transaction, expanded: false }
          }
          return transaction
        }

        )
      }
    }
    case SHOW_DELETE_ALERT: {
      return {

      };
    }

    default:{
      return state;
    }
  }
};


export const setPageLoadingActionCreator = (loading) => {
  return (
    {
      type: SET_PAGE_LOADING,
      loading
    }
  );
};

export const getTransactionsActionCreator = (transactions) => {
  return (
    {
      type: GET_TRANSACTIONS,
      transactions
    }
  );
};

export const getTotalTransactionsActionCreator = (totalTransactions) => {
  return (
      {
        type: GET_TOTAL_TRANSACTIONS,
        totalTransactions
      }
  );
};

export const setPageActionCreator = (page) => {
  return (
      {
        type: SET_PAGE,
        page
      }
  );
};

export const deleteTransactionActionCreator = (event) => {
  return (
    {
      type: DELETE_TRANSACTION,
      target: event.target
    }
  );
};

export const showMoreActionCreator = (event) => {
  return (
    {
      type: SHOW_MORE,
      target: event.target
    }
  );
};

export const showLessActionCreator = (event) => {
  return (
    {
      type: SHOW_LESS,
      target: event.target
    }
  );
};


export default reportsReducer;