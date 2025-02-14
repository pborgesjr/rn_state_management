import {CartActionTypes} from './actionTypes';
import {ThunkDispatch} from 'redux-thunk';

export type CartItem = {
  id: string;
  name: string;
  price: number;
};

export interface CartItemStore extends CartItem {
  amount: number;
}

export type State = {
  cart: CartItemStore[];
  items: CartItem[];
};

export type ReduxDispatch = ThunkDispatch<State, void, CartActionTypes>;
