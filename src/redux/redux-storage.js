import {combineReducers,createStore} from 'redux';
import homeFormReducer from './home-form-reducer';

let reducers = combineReducers({
  homeForm: homeFormReducer
});

let storage = createStore(reducers);

window.state = storage;
export default storage;