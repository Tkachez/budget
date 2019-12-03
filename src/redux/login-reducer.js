import { UsersApi } from '../api/users-api';

const CHECK_USER = 'CHECK_USER';
const SET_USER = 'SET_USER';
const UPDATE_INPUT = 'UPDATE_INPUT';

let initialState = {
  user: null,
  formItems: [
    {
      id: 'name',
      origin: 'input',
      value: '',
    },
    {
      id: 'email',
      origin: 'input',
      value: '',
    }
  ],
  isChecking: false,
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER: {
      return {
        ...state,
        isChecking: true
      }
    }
    case SET_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.name,
          email: action.email
        }

      }
    }
    case UPDATE_INPUT: {
      return {
        ...state,
        formItems: state.formItems.map(item => item.id === action.id ?
          {
            ...item,
            value: action.value
          } : {...item })
      }
    }
    default: {
      return state
    }
  }
};

export const setUser = (name,email) => {
  return (
      {
        type: SET_USER,
        name,
        email
      }
  );
};

export const updateInput = (event) => {
  return (
    {
      type: UPDATE_INPUT,
      value: event.target.value,
      id: event.target.id
    }
  );
};

export const initUserCheck = (username,email) => {
  return (dispatch) => {
    UsersApi.getCurrentUser(username,email).then(data => {
      dispatch(setUser(data));
    }).catch(err => console.log('Error: ' + err));
  };
};

export default loginReducer;