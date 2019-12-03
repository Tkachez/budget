import { combineReducers,createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import homeFormReducer from './home-form-reducer';
import reportsReducer from './report-reducer';
import loginReducer from './login-reducer';
import statisticsReducer from './statistics-reducer';
import signUpReducer from  './signup-reducer';
import accountReducer from './account-reducer';

let reducers = combineReducers({
  homeForm: homeFormReducer,
  reports: reportsReducer,
  statistics: statisticsReducer,
  signUp: signUpReducer,
  login: loginReducer,
  account: accountReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;

