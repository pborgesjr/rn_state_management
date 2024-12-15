import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Text style={styles.text}>Go back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    padding: 16,
    backgroundColor: '#fff',
  },
});
