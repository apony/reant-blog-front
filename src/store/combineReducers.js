import { combineReducers } from 'redux';
import incrementReducer from './reducers/index';
import user from './user/userInfo/reducers';
export default combineReducers({
  incrementReducer,
  user
})