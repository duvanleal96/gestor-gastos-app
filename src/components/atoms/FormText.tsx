import {TextInput, View, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  placeholder: string;
}
export const FormText = ({placeholder}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.04);',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 53,
  },
  input: {
    fontSize: 18,
  },
});
