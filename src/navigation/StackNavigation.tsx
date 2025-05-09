import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import LaunchScreen from '../screens/LaunchScreen';
import LoginUserScreen from '../screens/LoginUserScreen';
import PasswordUserScreen from '../screens/PaswordUserScreen';
import { RootStackParamList } from '../interface/MyStackScreenProps';
import { TabNavigation } from './TabNavigation';
const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
        <Stack.Screen
        name="LoginUserScreen"
        component={LoginUserScreen}
      />
      <Stack.Screen
        name="PasswordUserScreen"
        component={PasswordUserScreen}
      />
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
      />
    </Stack.Navigator>
  );
};
