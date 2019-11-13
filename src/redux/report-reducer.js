import { FaAppleAlt,FaCapsules,FaGlassMartini,FaWallet } from "react-icons/fa";
import React from 'react';
import classes from '../components/Main/Content/Reports/Reports.module.css';

const LOAD_MORE_TRANSACTIONS = 'LOAD_MORE_TRANSACTIONS';
const UPDATE_BUTTON_VISIBILITY = 'UPDATE_BUTTON_VISIBILITY';
const EDIT_TRANSACTION = 'EDIT_TRANSACTION';
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const SHOW_MORE = 'SHOW_MORE';
const SHOW_LESS = 'SHOW_LESS';
const TRANSACTIONS_PER_PAGE = 3;

let initialState = {
  transactions: [
    {id: 1, expanded:false, icon:<FaCapsules className={classes.icon}/>, buttons:{}, type:'health', value: 20, comment:'Pharmacy, Pool', date:''},
    {id: 2, expanded:false, icon:<FaAppleAlt className={classes.icon}/>, type:'food', value: 10, comment:'Apples, Juice', date:''},
    {id: 3, expanded:false, icon:<FaCapsules className={classes.icon}/>, type:'health', value: 5, comment:'Pharmacy', date:''},
    {id: 4, expanded:false, icon:<FaGlassMartini className={classes.icon}/>, type:'entertainment', value: 25, comment:'', date:''},
    {id: 5, expanded:false, icon:<FaAppleAlt className={classes.icon}/>, type:'food', value: 10, comment:'Nuts', date:''},
    {id: 6, expanded:false, icon:<FaWallet className={classes.icon}/>, type:'bills', value: 60, comment:'Flat', date:''}
  ],
  transactionsPerPage: TRANSACTIONS_PER_PAGE,
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
    loadMore: {
      label: 'Load More',
      loading: false,
      visible: true
    }
  }
};

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MORE_TRANSACTIONS: {
        return {
          ...state,
          ...state.page ++
        };
    }
    case UPDATE_BUTTON_VISIBILITY: {
      let totalPages = Math.ceil(state.transactions.length / state.transactionsPerPage),
        visibility;
      totalPages >= state.page ? visibility = false : visibility = true;
      return {
        ...state,
        button: {
          visible: visibility
        }
      };
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
        transactions: state.transactions.filter(transaction => !action.target.classList.contains(transaction.id))
      }
    }
    case SHOW_MORE: {
      return {
        ...state,
        transactions: state.transactions.map(transaction => {
          if(action.target.classList.contains(transaction.id)){
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
          if(action.target.classList.contains(transaction.id)){
            return {...transaction, expanded: false }
          }
          return transaction
        }

        )
      }
    }

    default:{
      return state;
    }
  }
};

export const loadMoreTransactionsActionCreator = () => {
  return (
    {
      type: LOAD_MORE_TRANSACTIONS,
    }
  );
};

export const updateButtonVisibilityActionCreator = () => {
  return (
    {
      type: UPDATE_BUTTON_VISIBILITY,
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