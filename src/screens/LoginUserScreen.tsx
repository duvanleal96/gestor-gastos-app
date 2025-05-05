import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {MyStackScreenProps} from '../interface/MyStackScreenProps';
import {RuleLogin} from '../components/atoms/RuleLogin';
import Logo from '../components/molecules/Logo';
import {UserLoginForm} from '../components/organisms/UserLoginForm';
import {styles} from '../theme/GestorTheme';

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
        <View style={styles.registerContainer}>
          <RuleLogin
            text="Register"
            action={() => navigation.navigate('RegisterScreen')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginUserScreen;
