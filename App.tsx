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
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './src/Routes';
import { GlobalProvider } from './src/stores';

const App = () => {
  return (
    <SafeAreaProvider>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </SafeAreaProvider>
  );
};

export default App;
