import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { MyDrawerContentComponentProps } from '../../interface/MyDrawerContentComponentProps';
import { styleMenuTheme } from '../../theme/MenuOptionsTheme';
import { useDispatch } from 'react-redux';
import { resetClient } from '../../redux/slices/ClientSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { movements } from '../../screens/MovementScreen';

export const MenuOptions = ({ navigation }: MyDrawerContentComponentProps) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetClient());
    navigation.reset({
      index: 0,
      routes: [{ name: 'home' }],
    });
  };

  return (
    <View style={styleMenuTheme.container}>
      {/* Encabezado con información del usuario */}
      <View style={styleMenuTheme.header}>
        <View style={styleMenuTheme.avatarContainer}>
          <Image
            source = {{ uri: movements.map(i => i.image).toString() || 'https://reactjs.org/logo-og.png' }}
            style={styleMenuTheme.avatarImage}
          />
        </View>

        <View style={styleMenuTheme.userInfo}>
          <Text style={styleMenuTheme.userName}>
            { 'Bienvenido Duvan'}
          </Text>
            <Text style={styleMenuTheme.userEmail}>{'Duvanleal65@gmail.com'}</Text>
        </View>
      </View>

      {/* Opciones del menú */}
      <View style={styleMenuTheme.menuItems}>
        <TouchableOpacity
          style={styleMenuTheme.menuItem}
          onPress={() => navigation.navigate('ChangePasswordScreen')}
        >
          <Icon name="vpn-key" size={24} style={styleMenuTheme.menuIcon} />
          <Text style={styleMenuTheme.menuText}>Cambiar contraseña</Text>
          <Icon name="chevron-right" size={24} style={styleMenuTheme.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styleMenuTheme.menuItem, styleMenuTheme.logoutItem]}
          onPress={handleLogout}
        >
          <Icon name="exit-to-app" size={24} style={styleMenuTheme.logoutIcon} />
          <Text style={[styleMenuTheme.menuText, styleMenuTheme.logoutText]}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
