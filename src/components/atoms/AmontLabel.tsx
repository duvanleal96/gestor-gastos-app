import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useCurrency from '../../hooks/UseCurrency';

interface Props {
  number?: number;
}
export const AmountLabel = ({number}: Props) => {
  const {currencyFormat} = useCurrency();
  return (
    <View style={styles.container}>
      <Text>Amount Available</Text>
      <Text style={styles.number}>{currencyFormat(number ? number : 0)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingLeft: 6},
  number: {fontSize: 18},
});
