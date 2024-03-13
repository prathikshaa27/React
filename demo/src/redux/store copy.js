
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers'; // You need to create your own reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
