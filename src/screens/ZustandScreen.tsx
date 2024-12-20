import React, {useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {ZustandScreenProps} from '../routes/types';
import {Item} from '../components/Item';
import {useStoreSelectors} from '../zustand/store';

const renderHeaderTitle = () => <Text style={styles.title}>Zustand</Text>;
const renderHeaderRight = (onPress: () => void) => (
  <TouchableOpacity onPress={onPress} style={styles.headerRight}>
    <Text style={styles.cart}>Cart</Text>
  </TouchableOpacity>
);

export const ZustandScreen = ({navigation}: ZustandScreenProps) => {
  const addToCart = useStoreSelectors.use.addToCart();
  const fetchItems = useStoreSelectors.use.fetchItems();
  const items = useStoreSelectors.use.items();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        renderHeaderRight(() => navigation.navigate('ZustandCart')),
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
          <Item key={item.id} {...item} onPress={() => addToCart(item)} />
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
