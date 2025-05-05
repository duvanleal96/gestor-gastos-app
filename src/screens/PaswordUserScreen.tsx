import React from 'react';
import {View} from 'react-native';
import {MyStackScreenProps} from '../interface/MyStackScreenProps';
import {styles} from '../theme/GestorTheme';
import {RuleLogin} from '../components/atoms/RuleLogin';
import Logo from '../components/molecules/Logo';
import {UserPasswordForm} from '../components/organisms/UserPasswordForm';

const PasswordUserScreen = ({navigation}: MyStackScreenProps) => {
  return (
    <View style={styles.main}>
      <Logo />
      <UserPasswordForm action={() => navigation.navigate('TabNavigation')} />
      <RuleLogin text="or use" />
    </View>
  );
};

export default PasswordUserScreen;
