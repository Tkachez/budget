import { combineReducers,createStore } from 'redux';
import homeFormReducer from './home-form-reducer';
import reportsReducer from './report-reducer';

let reducers = combineReducers({
  homeForm: homeFormReducer,
  reports: reportsReducer
});

let store = createStore(reducers);

export default store;

