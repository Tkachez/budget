import { UsersApi } from '../api/users-api';
import { setUser } from './signup-reducer';

const SET_USER = 'SET_USER';

let initialState = {
  isLoggedIn: false,
  user: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {

      }
    }
    default: {
      return state;
    }
  }
};

export const getUser = (username) => {
  return (dispatch) => {
    UsersApi.getCurrentUser(username).then(data => {
      dispatch(setUser(data))
    }).catch( err => console.log('Error: ' + err));
  }
};

export default accountReducer;