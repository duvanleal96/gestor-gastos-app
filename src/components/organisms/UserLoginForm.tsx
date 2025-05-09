import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { stylesLoginUser } from '../../theme/LoginUserTheme';

interface Props {
  email: string;
  setEmail: (email: string) => void;
  action?: () => void;
  loading?: boolean;
}
export const UserLoginForm = ({ email, setEmail, action, loading }: Props) => {

  return (
    <View style={stylesLoginUser.container}>
      <Text style={stylesLoginUser.title}>Inicia sesión o regístrate gratis</Text>

      <View style={stylesLoginUser.inputContainer}>
        <TextInput
          style={stylesLoginUser.input}
          placeholder="Email"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading}
        />
      </View>

      <TouchableOpacity
        style={[
          stylesLoginUser.btn,
          loading && { backgroundColor: '#cccccc' },
        ]}
        onPress={action}
        activeOpacity={0.8}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={stylesLoginUser.buttonText}>CONTINUAR</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
