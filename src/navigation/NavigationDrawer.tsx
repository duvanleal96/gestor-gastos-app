import * as React from 'react';
import {StackNavigation} from './StackNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MyDrawerContentComponentProps} from '../interface/MyDrawerContentComponentProps';
import {RegistrerScreen} from '../screens/RegistrerScreen';
import {MenuOptions} from '../components/organisms/MenuOptions';
import {TabNavigation} from './TabNavigation';

const Drawer = createDrawerNavigator();

export function NavigationDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={(props: MyDrawerContentComponentProps) => (
        <MenuOptions {...props} />
      )}>
      <Drawer.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerTintColor: 'white',
          title: 'Gestor',
          drawerItemStyle: {display: 'none'},
          headerShown: true,
          headerStyle: {
            backgroundColor: '#7CE2FA',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      />
       <Drawer.Screen
        name="home"
        component={StackNavigation}
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false,
          swipeEnabled: false,
          headerStyle: {
            backgroundColor: '#7CE2FA',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
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
    </Drawer.Navigator>
  );
}
