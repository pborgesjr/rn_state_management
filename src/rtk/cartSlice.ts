import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {CartItem, State} from './types';
import {MOCK_URL} from '../utils/constants';

const initialState: State = {
  cart: [],
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;

      const item = state.cart.find(i => i.id === newItem.id);
      if (item?.amount) {
        item.amount += 1;
      } else {
        state.cart.push({...newItem, amount: 1});
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.cart = state.cart.filter(item => item.id !== id);
    },
    resetCart(state) {
      state.cart = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const fetchItems = createAsyncThunk<CartItem[]>(
  'cart/fetchItems',
  async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await fetch(MOCK_URL);
      const data: CartItem[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching items:', error);
      return [];
    }
  },
);

export const {addToCart, removeFromCart, resetCart} = cartSlice.actions;
export default cartSlice.reducer;
