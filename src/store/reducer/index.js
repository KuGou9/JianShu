import { combineReducers } from 'redux';
import search from './search';
import detail from './detail';
import login from './login';

const rootReducer = combineReducers({
  search,
  detail,
  login,
});

export default rootReducer;
