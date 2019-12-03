import { UsersApi } from '../api/users-api';

const CREATE_USER = 'CREATE_USER';
const SET_USER = 'GET_USER';
const UPDATE_INPUT = 'UPDATE_INPUT';

let initialState = {
  image: null,
  loginButtonLabel: 'Login',
  signInButtonLabel: 'Sign In',
  formItems: [
    {
      id: 'name',
      value: ''
    },
    {
      id: 'email',
      value: ''
    }
  ]
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER: {
      return {
        ...state,
        users: [...state.users]
      };
    }
    case SET_USER: {
      return {
        ...state,
        user: { ...action.user }
      };
    }
    case UPDATE_INPUT: {
      return {
        ...state,
        formItems: state.formItems.map(item =>
          item.id === action.id ?
            {
              ...item,
              value: item.value
            } : false
        )
      };
    }
    default: {
      return state;
    }
  }
};

export const createUser = () => {
  return (
    {
      type: CREATE_USER
    }
  );
};

export const setUser = (user) => {
  return (
    {
      type: SET_USER,
      user
    }
  );
};

export const updateInput = (target) => {
  return (
    {
      type: UPDATE_INPUT,
      value: target.value,
      id: target.id
    }
  );
};

export const getUser = (username) => {
  return (dispatch) => {
    UsersApi.getCurrentUser(username).then(data => {
      dispatch(setUser(data))
    }).catch( err => console.log('Error: ' + err));
  }
};


export default signUpReducer;