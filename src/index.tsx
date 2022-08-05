/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Navigation} from 'navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SimpleProvider} from 'provider';
import {Provider} from 'react-redux';
import {store} from 'store';

const App = () => {
  return (
    // <SimpleProvider>
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
    // </SimpleProvider>
  );
};

export default App;
