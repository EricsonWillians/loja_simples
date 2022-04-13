import { combineReducers } from 'redux';
import { History } from 'history';

import { connectRouter } from 'connected-react-router';
import productsReducer from '../store/ducks/products';

const rootReducer = () => combineReducers({
  products: productsReducer,
});

export default rootReducer;