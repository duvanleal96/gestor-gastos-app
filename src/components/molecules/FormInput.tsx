import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Icons} from '../atoms/Icons';
import {FormText} from '../atoms/FormText';

interface Props {
  icon?: string;
  placeholder: string;
  isInvalid?: boolean;
  errorMsg?: string;
}
export const FormInput = ({icon, placeholder, isInvalid, errorMsg}: Props) => {
  const styles = StyleSheet.create({
    container: {flexDirection: 'row', alignSelf: 'center', width: '92%'},
    textContainer: {flexDirection: 'column', flex: 1},
    errorTxt: {
      color: isInvalid ? 'red' : 'white',
    },
  });
  return (
    <View style={styles.container}>
      <Icons iconName={icon} />
      <View style={styles.textContainer}>
        <FormText placeholder={placeholder} />
        <Text style={styles.errorTxt}>{errorMsg ? errorMsg : 'Error'}</Text>
      </View>
    </View>
  );
};
