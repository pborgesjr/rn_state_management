import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen';
import {ZustandScreen} from '../screens/ZustandScreen';
import {Header} from '../components/Header';
import {MobXScreen} from '../screens/MobXScreen';
import {RTKScreen} from '../screens/RTKScreen';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{header: Header}}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Zustand" component={ZustandScreen} />
    <Stack.Screen name="MobX" component={MobXScreen} />
    <Stack.Screen name="RTK" component={RTKScreen} />
  </Stack.Navigator>
);
