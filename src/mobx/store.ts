import {makeAutoObservable} from 'mobx';
import {MOCK_ITEMS} from '../mock';
import {CartItem, CartItemStore} from './types';

const fetchItems = (): Promise<CartItem[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MOCK_ITEMS);
    }, 2000);
  });
};

const addToCart = (newItem: CartItem, cart: CartItemStore[]) => {
  const item = cart.find(i => i.id === newItem.id);

  if (item) {
    return cart.map(i =>
      i.id === newItem.id ? {...i, amount: i.amount + 1} : i,
    );
  }

  return [...cart, {...newItem, amount: 1}];
};

const removeFromCart = (id: string, cart: CartItemStore[]) => {
  return cart.filter(item => item.id !== id);
};

const resetCart = () => {
  return [];
};

class Store {
  /** Initial state */
  cart: CartItemStore[] = [];
  items: CartItem[] = [];
  /** ---- */

  constructor() {
    makeAutoObservable(this);
  }

  async fetchItems() {
    this.items = await fetchItems();
  }

  addToCart(newItem: CartItem) {
    this.cart = addToCart(newItem, this.cart);
  }

  removeFromCart(id: string) {
    this.cart = removeFromCart(id, this.cart);
  }

  resetCart() {
    this.cart = resetCart();
  }
}

const store = new Store();
export default store;
