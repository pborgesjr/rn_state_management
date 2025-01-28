import React from 'react';
import {observer} from 'mobx-react-lite';
import {StyleSheet, ScrollView, View, Button, Text} from 'react-native';

import {Item} from '../components/Item';
import store from '../mobx/store';

export const MobXCartScreen = observer(() => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {store.cart.map(item => (
          <Item
            key={item.id}
            {...item}
            onRemove={() => store.removeFromCart(item.id)}
          />
        ))}
      </ScrollView>
      <Text style={styles.text}>
        Total:
        {store.cart.reduce(
          (total, current) => total + current.price * current.amount,
          0,
        )}
      </Text>
      {store.cart.length > 0 && (
        <Button title="Clear cart" onPress={() => store.resetCart()} />
      )}
    </View>
  );
});

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
