import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

import {createSelectors} from './create-selectors';
import {Action, State} from './types';
import {MOCK_ITEMS} from '../mock';

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
      setTimeout(() => {
        set({items: MOCK_ITEMS});
      }, 2000);
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
