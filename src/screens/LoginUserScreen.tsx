import React, { useEffect, useState } from 'react';
import {
  Alert,
  BackHandler,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';
import Logo from '../components/molecules/Logo';
import { UserLoginForm } from '../components/organisms/UserLoginForm';
import { styles } from '../theme/GestorTheme';
import { stylesLoginUser } from '../theme/LoginUserTheme';
import { supabase } from '../lib/supabase';

const LoginUserScreen: React.FC<MyStackScreenProps<'LoginUserScreen'>> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Hold on!', 'Are you sure you want to exit?', [
          {text: 'Cancel', onPress: () => null, style: 'cancel'},
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  const handleContinue = async () => {
    if (!email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      // Verificar si el email existe usando la API de Supabase v1.35.7
      console.log(email, 'email');
      const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .single();
        console.log(error, 'error', data, 'data');
      if (error || !data) {
        // Email no registrado, redirigir a registro
        navigation.navigate('RegisterScreen', { email });
      } else {
        // Email existe, redirigir a pantalla de contraseña
        navigation.navigate('PasswordUserScreen', { email });
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to verify email');
      console.error('Verification error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.main}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <UserLoginForm
          email={email}
          setEmail={setEmail}
          action={handleContinue}
          loading={loading}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen', { email })}
          disabled={loading}
        >
          <Text style={stylesLoginUser.registerText}>
            {loading ? 'Processing...' : 'Register'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginUserScreen;
