const CHECK_USER = 'CHECK_USER';
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

export const checkUser = () => {
  return (
    {
      type: SET_USER,
    }
  );
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

export default loginReducer;