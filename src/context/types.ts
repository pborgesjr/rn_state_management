export type CartItem = {
  id: string;
  name: string;
  price: number;
};

export interface CartItemStore extends CartItem {
  amount: number;
}

export type CartContextType = {
  cart: CartItemStore[];
  items: CartItem[];
};

export type Setters = {
  handleSetCart?: (newItem: CartItem) => void;
  handleSetItems?: (newItems: CartItem[]) => void;
  handleRemoveFromCart?: (id?: string) => void;
};
