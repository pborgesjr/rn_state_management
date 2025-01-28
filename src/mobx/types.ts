export type CartItem = {
  id: string;
  name: string;
  price: number;
};

export interface CartItemStore extends CartItem {
  amount: number;
}
