import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { stylesLoginUser } from '../../theme/LoginUserTheme';

interface Props {
  text: string;
  action?: (textNumber: string) => void;
}

const LoginButon = ({ text, action }: Props) => (
  <TouchableOpacity
    style={stylesLoginUser.btn}
    onPress={() => (action ? action(text) : console.log({ text }))}>
    <Text style={stylesLoginUser.btnText}>{text}</Text>
  </TouchableOpacity>
);

export default LoginButon;
