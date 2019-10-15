import {combineReducers,createStore} from 'redux';
import homeFormReducer from './home-form-reducer';

let reducers = combineReducers({
  homeForm: homeFormReducer
});

let storage = createStore(reducers);

export default storage;