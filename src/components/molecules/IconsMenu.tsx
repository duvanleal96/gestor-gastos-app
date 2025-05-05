import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icons} from '../atoms/Icons';
interface Props {
  icon?: string;
  text: string;
  action?: () => void;
}
export const IconsMenu = ({icon, text, action}: Props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'center',
      width: '95%',
      alignItems: 'center',
    },
    textContainer: {flexDirection: 'column', flex: 1},
    text: {fontSize: 18},
  });
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (action ? action() : console.log('press'))}>
      <Icons iconName={icon} />

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
