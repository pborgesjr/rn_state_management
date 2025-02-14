import {createContext} from 'react';
import type {CartContextType, Setters} from './types';

const initialState: CartContextType = {
  cart: [],
  items: [],
};

export const CartContext = createContext<CartContextType & Setters>(
  initialState,
);
