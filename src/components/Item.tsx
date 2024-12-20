import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

type ItemProps = {
  id: string;
  name: string;
  price: number;
  amount?: number;
  onPress?: () => void;
  onRemove?: () => void;
};

export const Item = ({name, price, amount, onPress, onRemove}: ItemProps) => {
  const itemText = amount
    ? `${name} - ${price} - ${amount}x`
    : `${name} - ${price}`;

  return (
    <View style={styles.item}>
      <Text style={styles.text}>{itemText}</Text>
      {onPress && <Button title="Add" onPress={onPress} />}
      {onRemove && <Button title="Remove" onPress={onRemove} />}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});
