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

export type Action = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  resetCart: () => void;
  fetchItems: () => Promise<void>;
};
