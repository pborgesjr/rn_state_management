import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ItemProps = {
  id: string;
  name: string;
  price: number;
  onPress?: () => void;
};

export const Item = ({id, name, price, onPress}: ItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} key={id} style={styles.item}>
      <Text style={styles.text}>
        {name} - {price}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});
