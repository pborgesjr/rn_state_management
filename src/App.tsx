import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {RootStack} from './routes';
import {store} from './rtk/store';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStack />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
