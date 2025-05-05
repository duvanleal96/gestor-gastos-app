import React from 'react';
import { TextInput, View } from 'react-native';
import { stylesLoginUser } from '../../theme/LoginUserTheme';

interface Props {
  placeholder?: string;
  action: (textNumber: string) => void;
}

const LoginInput = ({ placeholder, action }: Props) => {
  return (
    <View style={stylesLoginUser.inputContainer}>
      <TextInput style={stylesLoginUser.input} placeholder={placeholder} />
    </View>
  );
};

export default LoginInput;