import {createStore} from 'redux'
import reducers from './store/combineReducers'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
    blacklist: [] // reducer 里不持久化的数据
};

const myPersistReducer = persistReducer(persistConfig, reducers)

const store = createStore(myPersistReducer)

export const persistor = persistStore(store)
export default store

// import { createStore } from 'redux';
// import Reducer from './store/combineReducers';
//
// const store = createStore(Reducer);
// // console.log(store.getState())
// export default store;
