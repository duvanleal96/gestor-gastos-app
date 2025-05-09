import { TextInput, View, StyleSheet } from 'react-native';
import React from 'react';

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
}

export const FormText = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        keyboardType = "email-address"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 53,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 16,
    color: '#000',
  },
});
