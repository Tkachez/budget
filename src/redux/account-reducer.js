const CREATE_USER = 'CREATE_USER';
const SET_USER = 'GET_USER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const UPDATE_INPUT = 'UPDATE_INPUT';

let initialState = {
  users: [],
  currentUser: {},
  isLoggedIn: false,
  profileImage: null,
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

const accountReducer = (state = initialState, action) => {
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
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        buttonLabel: 'Logout'
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        buttonLabel: 'Login'
      };
    }
    case UPDATE_INPUT: {
      return {
        ...state,
        formItems: state.formItems.map(item =>
          item.id === action.id ?
            {
              ...item,
              value: action.value
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

export const login = () => {
  return (
    {
      type: LOGIN
    }
  );
};

export const logout = () => {
  return (
    {
      type: LOGOUT
    }
  );
};

export default accountReducer;