import * as React from 'react';
import {StackNavigation} from './StackNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MyDrawerContentComponentProps} from '../interface/MyDrawerContentComponentProps';
import {MenuOptions} from '../components/organisms/MenuOptions';

const Drawer = createDrawerNavigator();

export function NavigationDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
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
    </Drawer.Navigator>
  );
}
