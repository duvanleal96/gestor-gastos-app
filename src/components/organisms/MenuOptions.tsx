import React, { useEffect } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { MyDrawerContentComponentProps } from '../../interface/MyDrawerContentComponentProps';
import { styleMenuTheme } from '../../theme/MenuOptionsTheme';
import { useSelector } from 'react-redux';
import { resetClient } from '../../redux/slices/ClientSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { supabase } from '../../lib/supabase'; // Importa supabase directamente
import { CommonActions } from '@react-navigation/native';
import { RootState } from '../../redux/storage/ConfigStore';
import { fetchUserProfile } from '../../redux/slices/UserSlice';
import { useAppDispatch } from '../../hooks/hooks';

export const MenuOptions = ({ navigation }: MyDrawerContentComponentProps) => {
   const dispatch = useAppDispatch();
  const profile = useSelector((state: RootState) => state.user.profile);
  console.log('profile', profile);
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Error al cerrar sesión:', error.message);
        return;
      }
      dispatch(resetClient());

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'home' }],
        })
      );
    } catch (error) {
      console.error('Error en el proceso de logout:', error);
    }
  };

  return (
    <View style={styleMenuTheme.container}>
      {/* Encabezado con información del usuario */}
      <View style={styleMenuTheme.header}>
        <View style={styleMenuTheme.avatarContainer}>
          <Image
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={styleMenuTheme.avatarImage}
          />
        </View>

        <View style={styleMenuTheme.userInfo}>
          <Text style={styleMenuTheme.userName}> {'Bienvenido ' + profile?.name}</Text>
          <Text style={styleMenuTheme.userEmail}>{profile?.email || ''}</Text>
        </View>
      </View>

      {/* Opciones del menú */}
      <View style={styleMenuTheme.menuItems}>
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
