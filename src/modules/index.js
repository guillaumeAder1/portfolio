import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import github from './github';

export default combineReducers({
  router: routerReducer,
  counter,
  github
});
