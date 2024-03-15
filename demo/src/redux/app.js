import store from './store';
import { fetchData } from './actions';

store.dispatch(fetchData());
