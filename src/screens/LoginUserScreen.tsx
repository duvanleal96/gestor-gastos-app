import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';
import {MyStackScreenProps} from '../interface/MyStackScreenProps';
import Logo from '../components/molecules/Logo';
import {UserLoginForm} from '../components/organisms/UserLoginForm';
import {styles} from '../theme/GestorTheme';
import { TouchableOpacity } from 'react-native';
import { stylesLoginUser } from '../theme/LoginUserTheme';

const LoginUserScreen = ({navigation}: MyStackScreenProps) => {
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.main}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <UserLoginForm
          action={() => navigation.navigate('PaswordUserScreen')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={stylesLoginUser.registerText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginUserScreen;
