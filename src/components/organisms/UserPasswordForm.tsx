// components/organisms/UserPasswordForm.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { stylesLoginUser } from '../../theme/LoginUserTheme';

interface Props {
  password: string;
  setPassword: (password: string) => void;
  action: () => void;
  loading?: boolean;
}

export const UserPasswordForm = ({ password, setPassword, action, loading }: Props) => {
  return (
    <View style={stylesLoginUser.container}>
      <Text style={stylesLoginUser.title}>Enter your password</Text>

      <View style={stylesLoginUser.inputContainer}>
        <TextInput
          style={stylesLoginUser.input}
          placeholder="Password"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        style={stylesLoginUser.btn}
        onPress={action}
        activeOpacity={0.8}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={stylesLoginUser.buttonText}>CONTINUE</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};