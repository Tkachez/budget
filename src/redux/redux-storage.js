import { combineReducers,createStore } from 'redux';
import homeFormReducer from './home-form-reducer';

let reducers = combineReducers({
  homeForm: homeFormReducer
});

let store = createStore(reducers);

export default store;

