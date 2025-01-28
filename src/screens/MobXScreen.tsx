import React, {useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {observer} from 'mobx-react-lite';

import {MobXScreenProps} from '../routes/types';
import {Item} from '../components/Item';
import store from '../mobx/store';

const renderHeaderTitle = () => <Text style={styles.title}>MobX</Text>;
const renderHeaderRight = (onPress: () => void) => (
  <TouchableOpacity onPress={onPress} style={styles.headerRight}>
    <Text style={styles.cart}>Cart</Text>
  </TouchableOpacity>
);

export const MobXScreen = observer(({navigation}: MobXScreenProps) => {
  useEffect(() => {
    store.fetchItems();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        renderHeaderRight(() => navigation.navigate('MobXCart')),
      headerTitle: renderHeaderTitle,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        bounces={false}
        overScrollMode="never">
        {store.items.map(item => (
          <Item key={item.id} {...item} onPress={() => store.addToCart(item)} />
        ))}
      </ScrollView>
    </View>
  );
});

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
