import * as axios from 'axios';

const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
const LOAD_MORE_TRANSACTIONS = 'LOAD_MORE_TRANSACTIONS';
const UPDATE_BUTTON_VISIBILITY = 'UPDATE_BUTTON_VISIBILITY';
// const EDIT_TRANSACTION = 'EDIT_TRANSACTION';
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const SHOW_MORE = 'SHOW_MORE';
const SHOW_LESS = 'SHOW_LESS';
const SHOW_DELETE_ALERT = 'SHOW_DELETE_ALERT';
const TRANSACTIONS_PER_PAGE = 3;

let initialState = {
  transactions: [],
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
    case SET_TRANSACTIONS: {
      return {
        ...state,
        transactions:  [...action.transactions]
      };
    }
    case LOAD_MORE_TRANSACTIONS: {
        return {
          ...state,
          ...state.page ++
        };
    }
    case UPDATE_BUTTON_VISIBILITY: {
      let totalPages = Math.ceil(state.transactions.length / state.transactionsPerPage),
        visibility;
      totalPages === state.page ? visibility = false : visibility = true;
      console.log(visibility);
      return {
        ...state,
        buttons: {
          ...state.buttons,
          loadMore: {
            ...state.loadMore,
            visible: visibility
          }
        }

      };
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

export const setTransactionsActionCreator = (transactions) => {
  return (
    {
      type: SET_TRANSACTIONS,
      transactions
    }
  );
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

export const showDeleteAlertActionCreator = (event) => {
  return (
    {
      type: SHOW_DELETE_ALERT,
      target: event.target
    }
  );
};

// export const editTransactionActionCreator = (transactionId, fieldId, value) => {
//   return (
//     {
//       type: EDIT_TRANSACTION,
//       fieldId,
//       value,
//       transactionId
//     }
//   );
// };

export default reportsReducer;