import axios from 'axios';

const SET_USER = 'SET_USER';
const UPDATE_INPUT = 'UPDATE_INPUT';

let initialState = {
  user: {},
  items: [
    {
      id: 'name',
      value: '',
    },
    {
      id: 'email',
      value: '',
    }
  ],
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      debugger;
      axios.get(`http://localhost:5000/users/`);
      return {
        ...state,
        user: action.user
      }
    }
    case UPDATE_INPUT: {
      return {
        ...state,
        items: state.items.map(item => item.id === action.id ?
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

export const updateInput = (target) => {
  return (
    {
      type: UPDATE_INPUT,
      value: target.value,
      id: target.id
    }
  );
};

export default loginReducer;