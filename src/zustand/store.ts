import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

import {createSelectors} from './create-selectors';
import {Action, State} from './types';
import {MOCK_URL} from '../utils/constants';

export const initialState: State = {
  cart: [],
  items: [],
};

const useStore = create<State & Action>()(
  immer(set => ({
    /**Initial state */
    ...initialState,
    /** ---- */

    /** Actions */
    fetchItems: async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await fetch(MOCK_URL);
        const data = await response.json();
        set({items: data});
      } catch (error) {
        // handle error
      }
    },
    addToCart: newItem =>
      set(state => {
        const item = state.cart.find(i => i.id === newItem.id);
        if (item?.amount) {
          item.amount += 1;
        } else {
          state.cart.push({...newItem, amount: 1});
        }
      }),
    removeFromCart: id =>
      set(state => ({
        ...state,
        cart: state.cart.filter(item => item.id !== id),
      })),
    resetCart: () => set({cart: []}),
    /** ---- */
  })),
);

export const useStoreSelectors = createSelectors(useStore);

export default useStore;
