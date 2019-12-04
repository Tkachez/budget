import { combineReducers,createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import homeFormReducer from './home-form-reducer';
import reportsReducer from './report-reducer';
import statisticsReducer from './statistics-reducer';
import signUpReducer from  './signup-reducer';
import accountReducer from './account-reducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  homeForm: homeFormReducer,
  reports: reportsReducer,
  statistics: statisticsReducer,
  signUp: signUpReducer,
  account: accountReducer,
  form: formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export default store;

