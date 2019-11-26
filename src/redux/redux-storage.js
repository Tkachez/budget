import { combineReducers,createStore } from 'redux';
import homeFormReducer from './home-form-reducer';
import reportsReducer from './report-reducer';
import statisticsReducer from './statistics-reducer';
import accountReducer from  './account-reducer';

let reducers = combineReducers({
  homeForm: homeFormReducer,
  reports: reportsReducer,
  statistics: statisticsReducer,
  account: accountReducer
});

let store = createStore(reducers);

export default store;

