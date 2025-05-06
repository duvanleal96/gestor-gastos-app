import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { stylesLoginUser } from '../../theme/LoginUserTheme';

interface Props {
  action?: () => void;
}
export const UserLoginForm = ({ action }: Props) => {
  const [email, setEmail] = React.useState('');

  return (
    <View style={stylesLoginUser.container}>
      <Text style={stylesLoginUser.title}>Login or sign up for free</Text>

      <View style={stylesLoginUser.inputContainer}>
        <TextInput
          style={stylesLoginUser.input}
          placeholder="Email or Username"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

        <TouchableOpacity
                style={stylesLoginUser.btn}
                 onPress={action}
                 activeOpacity={0.8}
              >
              <Text style={stylesLoginUser.buttonText}>CONTINUE</Text>
              </TouchableOpacity>
    </View>
  );
};
