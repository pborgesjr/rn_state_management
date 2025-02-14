import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {RootStack} from './routes';
import {store} from './rtk/store';
import {CartContext} from './context/cartContext';
import {useCart, useItems} from './context/useCart';

function App(): React.JSX.Element {
  const cartValues = useCart();
  const itemValues = useItems();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <CartContext.Provider value={{...cartValues, ...itemValues}}>
          <RootStack />
        </CartContext.Provider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
