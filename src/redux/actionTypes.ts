import {CartItem} from './types';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

interface FetchItemsAction {
  type: typeof FETCH_ITEMS;
  payload: CartItem[];
}

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: CartItem;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: string;
}

interface ClearCartAction {
  type: typeof CLEAR_CART;
}

export type CartActionTypes =
  | AddToCartAction
  | RemoveFromCartAction
  | ClearCartAction
  | FetchItemsAction;
