export type CartItem = {
  id: string;
  name: string;
  price: number;
};

export type State = {
  cart: CartItem[];
};

export type Action = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  resetCart: () => void;
};
