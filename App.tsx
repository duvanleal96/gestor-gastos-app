import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationDrawer} from './src/navigation/NavigationDrawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <NavigationDrawer />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
