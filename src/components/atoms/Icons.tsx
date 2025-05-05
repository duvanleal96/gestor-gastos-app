import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon3MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  iconName?: string;
}
export const Icons = ({iconName}: Props) => {
  return (
    <View style={styles.container}>
      <Icon3MaterialIcons
        name={iconName ? iconName : 'arrow-right'}
        size={24}
        color={'rgba(0, 0, 0, 0.6)'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 53,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
