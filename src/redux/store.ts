import {createStore, applyMiddleware} from 'redux'; // createStore is going to be deprecated soon
import {thunk} from 'redux-thunk';

import cartReducer from './reducer';

const store = createStore(cartReducer, applyMiddleware(thunk));

export default store;
