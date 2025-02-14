import {produce} from 'immer';

import {CartActionTypes} from './actionTypes';
import {State} from './types';

const initialState: State = {
  cart: [],
  items: [],
};

const cartReducer = (state = initialState, action: CartActionTypes): State =>
  produce(state, draft => {
    switch (action.type) {
      case 'FETCH_ITEMS':
        draft.items = action.payload;
        break;
      case 'ADD_TO_CART':
        const newItem = action.payload;

        const item = draft.cart.find(i => i.id === newItem.id);
        if (item?.amount) {
          item.amount += 1;
        } else {
          draft.cart.push({...newItem, amount: 1});
        }

        break;
      case 'REMOVE_FROM_CART':
        const id = action.payload;
        draft.cart = draft.cart.filter(cartItem => cartItem.id !== id);
        break;
      case 'CLEAR_CART':
        draft.cart = [];
        break;
      default:
        return draft;
    }
  });

export default cartReducer;
