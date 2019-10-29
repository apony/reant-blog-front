import { createStore } from 'redux';
import Reducer from './store/combineReducers';

const store = createStore(Reducer);
// console.log(store.getState())
export default store;