import axios from 'axios';

const SET_USER = 'SET_USER';
const UPDATE_INPUT = 'UPDATE_INPUT';

let initialState = {
  user: {},
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
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      axios.get(`http://localhost:5000/users/`);
      return {
        ...state,
        user: action.user
      }
    }
    case UPDATE_INPUT: {
      return {
        ...state,
        formItems: state.formItems.map(item => item.id === action.id ?
          {
          ...item,
          value: action.value
        } : false )

      }
    }
    default: {
      return state
    }
  }
};

export const setUser = () => {
  return (
    {
      type: SET_USER
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

export default loginReducer;