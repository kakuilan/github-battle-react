// 创建store
import { createStore, } from 'redux';
import combineReducers from './reducers.js';

const store = createStore(combineReducers);

export default store;
