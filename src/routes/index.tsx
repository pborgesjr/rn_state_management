import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen';
import {ZustandScreen} from '../screens/ZustandScreen';
import {ZustandCartScreen} from '../screens/ZustandCartScreen';
import {MobXScreen} from '../screens/MobXScreen';
import {RTKScreen} from '../screens/RTKScreen';
import {RootStackParamList} from './types';
import {MobXCartScreen} from '../screens/MobXCartScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Zustand" component={ZustandScreen} />
    <Stack.Screen name="ZustandCart" component={ZustandCartScreen} />
    <Stack.Screen name="MobX" component={MobXScreen} />
    <Stack.Screen name="MobXCart" component={MobXCartScreen} />
    <Stack.Screen name="RTK" component={RTKScreen} />
  </Stack.Navigator>
);
