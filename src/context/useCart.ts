import {useState} from 'react';
import {CartItem, CartItemStore} from './types';

export const useItems = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const handleSetItems = (newItems: CartItem[]) => setItems(newItems);

  return {items, handleSetItems};
};

export const useCart = () => {
  const [cart, setCart] = useState<CartItemStore[]>([]);

  const handleSetCart = (newItem: CartItem) => {
    /*  const item = cart.find(i => i.id === newItem.id);
    if (item?.amount) {
      item.amount += 1;
    } else {
      setCart([...cart, {...newItem, amount: 1}]);
    } */
    setCart(prevState =>
      prevState.find(i => i.id === newItem.id)
        ? prevState.map(currentItem =>
            currentItem.id === newItem.id
              ? {...currentItem, amount: currentItem.amount + 1}
              : currentItem,
          )
        : [...prevState, {...newItem, amount: 1}],
    );
  };

  const handleRemoveFromCart = (id?: string) => {
    setCart(prevState => (id ? prevState.filter(item => item.id !== id) : []));
  };

  return {cart, handleSetCart, handleRemoveFromCart};
};
