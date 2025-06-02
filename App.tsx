import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationDrawer} from './src/navigation/NavigationDrawer';
import {Provider} from 'react-redux';
import {ConfigStorage} from './src/redux/storage/ConfigStore';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

export const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={ConfigStorage}>
      <NavigationContainer>
        <NavigationDrawer />
        <Toast />
      </NavigationContainer>
    </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
