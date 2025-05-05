import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {stylesLoginUser} from '../../theme/LoginUserTheme';

interface Props {
  text: string;
  action?: (textNumber: string) => void;
}

export const RuleLogin = ({text, action}: Props) => {
  return (
    <TouchableOpacity
      style={stylesLoginUser.containerRule}
      onPress={() => (action ? action(text) : console.log({text}))}>
      {' '}
      <View style={stylesLoginUser.line} />
      <View>
        <Text style={stylesLoginUser.textRule}>{text}</Text>
      </View>
      <View style={stylesLoginUser.line} />
    </TouchableOpacity>
  );
};
