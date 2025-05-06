import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Icon3MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MovementScreen} from '../screens/MovementScreen';
import {PaymentScreen} from '../screens/PaymentScreen';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="My App"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#7CE2FA',
          height: 60,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="My App"
        component={MovementScreen}
        options={{
          tabBarLabel: 'Movimientos',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: props => (
            <IconIonicons
              name={props.focused ? 'home-sharp' : 'home-outline'}
              size={props.size}
              color={props.color}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}
      />
      <Tab.Screen
        name="Registrar"
        component={PaymentScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon3MaterialIcons name="payment" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
