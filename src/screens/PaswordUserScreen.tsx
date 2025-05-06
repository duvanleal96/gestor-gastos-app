import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyStackScreenProps} from '../interface/MyStackScreenProps';
import {styles} from '../theme/GestorTheme';
import Logo from '../components/molecules/Logo';
import {UserPasswordForm} from '../components/organisms/UserPasswordForm';
import {stylesLoginUser} from '../theme/LoginUserTheme';

const PasswordUserScreen = ({navigation}: MyStackScreenProps) => {
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
        <UserPasswordForm action={() => navigation.navigate('TabNavigation')} />
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={stylesLoginUser.registerText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PasswordUserScreen;
