import { UsersApi } from '../api/users-api';

const SET_USER = 'SET_USER';
const SET_MESSAGE ='SET_MESSAGE';
const LOGIN = 'LOGIN';

let initialState = {
  isLoggedIn: false,
  user: null,
  message: '',
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.user
      }
    }
    case SET_MESSAGE: {
      return {
        ...state,
        message: action.message
      }
    }
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true
      }
    }
    default: {
      return state;
    }
  }
};

const login = () => {
  return (
    {
      type:LOGIN
    }
  );
};

const setUser = (user) => {
  return (
    {
      type: SET_USER,
      user
    }
  );
};

const setMessage = (message) => {
  return (
    {
      type: SET_MESSAGE,
      message
    }
  );
};

export const getUser = (username, email) => {
  return (dispatch) => {
    UsersApi.getCurrentUser(username,email).then(data => {
      if(data){
        dispatch(setUser(data));
        dispatch(setMessage(`Welcome back ${data.username}`));
        dispatch(login());
      } else {
        dispatch(setMessage('User or password is incorrect!'));
      }
    }).catch( err => {
      console.log('Error: ' + err);
    });
  }
};

export default accountReducer;