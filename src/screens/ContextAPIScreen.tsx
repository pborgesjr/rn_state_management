import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {ContextAPIScreenProps} from '../routes/types';
import {Item} from '../components/Item';
import {CartContext} from '../context/cartContext';
import {CartItem} from '../context/types';
import {MOCK_URL} from '../utils/constants';

const renderHeaderTitle = () => <Text style={styles.title}>Context API</Text>;
const renderHeaderRight = (onPress: () => void) => (
  <TouchableOpacity onPress={onPress} style={styles.headerRight}>
    <Text style={styles.cart}>Cart</Text>
  </TouchableOpacity>
);

export const ContextAPIScreen = ({navigation}: ContextAPIScreenProps) => {
  const {items, handleSetItems, handleSetCart} = useContext(CartContext);

  useEffect(() => {
    const fetchItemsAsync = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await fetch(MOCK_URL);
        const data: CartItem[] = await response.json();
        handleSetItems?.(data);
      } catch (error) {
        console.error('Error fetching items:', error);
        return [];
      }
    };

    fetchItemsAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        renderHeaderRight(() => navigation.navigate('ContextAPICart')),
      headerTitle: renderHeaderTitle,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        bounces={false}
        overScrollMode="never">
        {items.map(item => (
          <Item key={item.id} {...item} onPress={() => handleSetCart?.(item)} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 24,
  },
  content: {
    gap: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  headerRight: {
    padding: 12,
  },
  cart: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
