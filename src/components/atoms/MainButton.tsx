import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, TextStyle, ViewStyle } from 'react-native';

interface Props {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const MainButton = ({ text, onPress, disabled = false,  style,
  textStyle }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0A5EFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#00000',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.6,
  },
});
