import React, {useState} from 'react';
import {View, StyleSheet, Alert, TouchableOpacity, Text} from 'react-native';
import {FormInput} from '../components/molecules/FormInput';
import {MainButton} from '../components/atoms/MainButton';
import {styles} from '../theme/GestorTheme';
import {AuthService} from '../modules/services/auth';
import LogoLaunch from '../components/atoms/LogoLaunch';
import {stylesLoginUser} from '../theme/LoginUserTheme';

export const RegistrerScreen = ({navigation}: {navigation: any}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    try {
      await AuthService.signUp(
        formData.email,
        formData.password,
        formData.name,
        formData.phone,
      );
      Alert.alert('Éxito', 'Registro completado');
      navigation.reset({
        index: 0,
        routes: [{name: 'home'}],
      });
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Error en el registro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={stylesForm.container}>
      <View style={styles.logoContainer}>
        <LogoLaunch />
      </View>
      <FormInput
        icon="user"
        placeholder="Nombre completo"
        value={formData.name}
        onChangeText={text => setFormData({...formData, name: text})}
      />
      <FormInput
        icon="mail"
        placeholder="Email"
        value={formData.email}
        onChangeText={text => setFormData({...formData, email: text})}
      />
      <FormInput
        icon="phone"
        placeholder="Teléfono"
        value={formData.phone}
        onChangeText={text => setFormData({...formData, phone: text})}
      />
      <FormInput
        icon="lock"
        placeholder="Contraseña"
        secureTextEntry
        value={formData.password}
        onChangeText={text => setFormData({...formData, password: text})}
      />
      <MainButton
        text={loading ? 'Registrando...' : 'Registrar'}
        onPress={handleRegister}
        disabled={loading}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('home')}
        disabled={loading}>
        <Text style={stylesLoginUser.registerText}>
          {'¿Ya tienes cuenta? Iniciar sesión'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesForm = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});
