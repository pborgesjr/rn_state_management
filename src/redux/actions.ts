import {
  FETCH_ITEMS,
  ADD_TO_CART,
  CartActionTypes,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from './actionTypes';
import {CartItem, ReduxDispatch} from './types';
import {MOCK_URL} from '../utils/constants';

export const fetchItemsAction = (items: CartItem[]): CartActionTypes => ({
  type: FETCH_ITEMS,
  payload: items,
});

export const addToCart = (item: CartItem): CartActionTypes => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id: string): CartActionTypes => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const clearCart = (): CartActionTypes => ({
  type: CLEAR_CART,
});

export const fetchItems = () => async (dispatch: ReduxDispatch) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch(MOCK_URL);
    const data: CartItem[] = await response.json();
    dispatch(fetchItemsAction(data));
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
};
