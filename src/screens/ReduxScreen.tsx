import React, {useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {ReduxScreenProps} from '../routes/types';
import {Item} from '../components/Item';
import {useAppDispatch, useAppSelector} from '../redux/utils';
import {addToCart, fetchItems} from '../redux/actions';

const renderHeaderTitle = () => <Text style={styles.title}>Redux</Text>;
const renderHeaderRight = (onPress: () => void) => (
  <TouchableOpacity onPress={onPress} style={styles.headerRight}>
    <Text style={styles.cart}>Cart</Text>
  </TouchableOpacity>
);

export const ReduxScreen = ({navigation}: ReduxScreenProps) => {
  const items = useAppSelector(state => state.items);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        renderHeaderRight(() => navigation.navigate('ReduxCart')),
      headerTitle: renderHeaderTitle,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
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
