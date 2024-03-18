import { createStore } from 'redux';
import cartReducer from './cartreducers';

const store = createStore(cartReducer);

export default store;