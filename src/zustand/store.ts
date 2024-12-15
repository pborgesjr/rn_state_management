import {create} from 'zustand';
import {createSelectors} from './create-selectors';
import {Action, State} from './types';

const useStore = create<State & Action>(set => ({
  cart: [],
  //TODO: add amount
  addToCart: item => set(state => ({cart: [...state.cart, item]})),
  removeFromCart: id =>
    set(state => ({...state, cart: state.cart.filter(item => item.id !== id)})),
  resetCart: () => set({cart: []}),
}));

export const useStoreSelectors = createSelectors(useStore);

export default useStore;
