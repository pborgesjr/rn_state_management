import React, {useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {RTKQueryScreenProps} from '../routes/types';
import {Item} from '../components/Item';
import {useGetItemsQuery} from '../rtk/itemsApiSlice';
import {useAppDispatch} from '../rtk/store';
import {addToCart} from '../rtk/cartSlice';

const renderHeaderTitle = () => <Text style={styles.title}>RTK + Query</Text>;
const renderHeaderRight = (onPress: () => void) => (
  <TouchableOpacity onPress={onPress} style={styles.headerRight}>
    <Text style={styles.cart}>Cart</Text>
  </TouchableOpacity>
);

export const RTKQueryScreen = ({navigation}: RTKQueryScreenProps) => {
  const {data: items, isLoading} = useGetItemsQuery({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        renderHeaderRight(() => navigation.navigate('RTKCart')),
      headerTitle: renderHeaderTitle,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      <ScrollView
        contentContainerStyle={styles.content}
        bounces={false}
        overScrollMode="never">
        {items?.map(item => (
          <Item
            key={item.id}
            {...item}
            onPress={() => dispatch(addToCart(item))}
          />
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
