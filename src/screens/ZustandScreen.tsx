import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {ZustandScreenProps} from '../routes/types';
import {MOCK_ITEMS} from '../mock';
import {Item} from '../components/Item';

export const ZustandScreen = ({navigation}: ZustandScreenProps) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      bounces={false}
      overScrollMode="never">
      {MOCK_ITEMS.map(item => (
        <Item {...item} />
      ))}
    </ScrollView>
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
});
