import React from 'react';
import {StyleSheet, ScrollView, View, Button, Text} from 'react-native';
import {useStoreSelectors} from '../zustand/store';
import {Item} from '../components/Item';

export const ZustandCartScreen = () => {
  const cart = useStoreSelectors.use.cart();
  const removeFromCart = useStoreSelectors.use.removeFromCart();
  const resetCart = useStoreSelectors.use.resetCart();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {cart.map(item => (
          <Item
            key={item.id}
            {...item}
            onRemove={() => removeFromCart(item.id)}
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
      {cart.length > 0 && <Button title="Clear cart" onPress={resetCart} />}
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
