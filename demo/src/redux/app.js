// app.js or wherever you want to dispatch the action
import store from './store';
import { fetchData } from './actions';

store.dispatch(fetchData());
