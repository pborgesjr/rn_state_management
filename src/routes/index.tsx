import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen';
import {ZustandScreen} from '../screens/ZustandScreen';
import {ZustandCartScreen} from '../screens/ZustandCartScreen';
import {MobXScreen} from '../screens/MobXScreen';
import {RTKScreen} from '../screens/RTKScreen';
import {RootStackParamList} from './types';
import {MobXCartScreen} from '../screens/MobXCartScreen';
import {RTKCartScreen} from '../screens/RTKCartScreen';
import {RTKQueryScreen} from '../screens/RTKQueryScreen';
import {RTKQueryCartScreen} from '../screens/RTKQueryCartScreen';
import {ContextAPIScreen} from '../screens/ContextAPIScreen';
import {ContextAPICartScreen} from '../screens/ContextAPICartScreen';

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
    {/** Insert bare redux example */}
    <Stack.Screen name="RTK" component={RTKScreen} />
    <Stack.Screen name="RTKCart" component={RTKCartScreen} />
    <Stack.Screen name="RTKQuery" component={RTKQueryScreen} />
    <Stack.Screen name="RTKQueryCart" component={RTKQueryCartScreen} />
    <Stack.Screen name="ContextAPI" component={ContextAPIScreen} />
    <Stack.Screen name="ContextAPICart" component={ContextAPICartScreen} />
  </Stack.Navigator>
);
