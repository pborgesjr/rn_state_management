import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';

import {HomeScreenProps} from '../routes/types';

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Zustand')}
        style={styles.button}>
        <Text style={styles.text}>Go to Zustand Example</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('MobX')}
        style={styles.button}>
        <Text style={styles.text}>Go to MobX Example</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('RTK')}
        style={styles.button}>
        <Text style={styles.text}>Go to RTK Example</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('RTKQuery')}
        style={styles.button}>
        <Text style={styles.text}>Go to RTK + Query Example</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('ContextAPI')}
        style={styles.button}>
        <Text style={styles.text}>Go to Context API Example</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 16,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
