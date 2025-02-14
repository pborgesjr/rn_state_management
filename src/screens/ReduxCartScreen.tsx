import React from 'react';
import {StyleSheet, ScrollView, View, Button, Text} from 'react-native';

import {Item} from '../components/Item';
import {useAppDispatch, useAppSelector} from '../redux/utils';
import {clearCart, removeFromCart} from '../redux/actions';

export const ReduxCartScreen = () => {
  const cart = useAppSelector(state => state.cart);

  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {cart.map(item => (
          <Item
            key={item.id}
            {...item}
            onRemove={() => dispatch(removeFromCart(item.id))}
          />
        ))}
      </ScrollView>
      <Text style={styles.text}>
        Total:
        {cart.reduce(
          (total, current) => total + current.price * current.amount,
          0,
        )}
      </Text>
      {cart.length > 0 && (
        <Button title="Clear cart" onPress={() => dispatch(clearCart())} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
  },
  content: {
    gap: 8,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
