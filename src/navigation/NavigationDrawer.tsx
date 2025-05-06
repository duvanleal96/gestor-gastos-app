import * as React from 'react';
import {StackNavigation} from './StackNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MyDrawerContentComponentProps} from '../interface/MyDrawerContentComponentProps';
import {RegistrerScreen} from '../screens/RegistrerScreen';
import {MenuOptions} from '../components/organisms/MenuOptions';
import {TabNavigation} from './TabNavigation';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';

const Drawer = createDrawerNavigator();

export function NavigationDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={(props: MyDrawerContentComponentProps) => (
        <MenuOptions {...props} />
      )}>
      <Drawer.Screen
        name="home"
        component={StackNavigation}
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerTintColor: 'white',
          title: 'Gestor',
          drawerItemStyle: {display: 'none'},
          headerStyle: {
            backgroundColor: '#7CE2FA',
          },
        }}
      />
      <Drawer.Screen
        name="RegisterScreen"
        component={RegistrerScreen}
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{
          headerTintColor: 'white',
          title: 'Gestor',
          drawerItemStyle: {display: 'none'},
          headerStyle: {
            backgroundColor: 'red',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
