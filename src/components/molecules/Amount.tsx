import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Icons} from '../atoms/Icons';
import {AmountLabel} from '../atoms/AmontLabel';

interface Props {
  number?: number;
}
export const Amount = ({number}: Props) => {
  return (
    <View style={styles.container}>
      <Icons iconName="euro-symbol" />
      <AmountLabel number={number} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    height: 53,
    width: '92%',
    alignSelf: 'center',
  },
});
