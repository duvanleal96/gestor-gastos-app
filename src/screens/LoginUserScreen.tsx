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
import Toast from 'react-native-toast-message';

const LoginUserScreen: React.FC<MyStackScreenProps<'LoginUserScreen'>> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Espera!', '¿Estas seguro que deseas salir?', [
          {text: 'Cancelar', onPress: () => null, style: 'cancel'},
          {text: 'Salir', onPress: () => BackHandler.exitApp()},
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
      Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'Por favor digite un correo válido',
                  });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .single();
      if (error || !data) {
        Toast.show({
                      type: 'error',
                      text1: 'Error',
                      text2: 'Lo siento, no hemos encontrado el correo',
                    });
        //navigation.navigate('RegisterScreen', { email });
      } else {
        navigation.navigate('PasswordUserScreen', { email });
      }
    } catch (error) {
      Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'Error al verificar email',
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
            {loading ? 'Procesando...' : 'Registrar'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginUserScreen;
