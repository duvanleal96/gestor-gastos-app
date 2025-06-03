import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MyStackScreenProps } from '../interface/MyStackScreenProps'; // Importa los tipos corregidos
import { styles } from '../theme/GestorTheme';
import Logo from '../components/molecules/Logo';
import { UserPasswordForm } from '../components/organisms/UserPasswordForm';
import { stylesLoginUser } from '../theme/LoginUserTheme';
import { supabase } from '../lib/supabase';
import Toast from 'react-native-toast-message';
import { useAppDispatch } from '../hooks/hooks';
import { fetchUserProfile } from '../redux/slices/UserSlice';

// Especifica que esta pantalla espera el parámetro 'email'
const PasswordUserScreen: React.FC<MyStackScreenProps<'PasswordUserScreen'>> = ({
  navigation,
  route,
}) => {
  const { email } = route.params;
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signIn({
        email,
        password,
      });
      dispatch(fetchUserProfile());
      if (error) {throw error;}

      navigation.reset({
        index: 0,
        routes: [{ name: 'TabNavigation' }],
      });
    } catch (error) {
      Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'Credenciales incorrectas',
                  });
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
        keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <UserPasswordForm
          password={password}
          setPassword={setPassword}
          action={handleLogin}
          loading={loading}
        />
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen', { email })}>
          <Text style={stylesLoginUser.registerText}>registrate</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PasswordUserScreen;
