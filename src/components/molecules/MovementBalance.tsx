import {Text, View} from 'react-native';
import React from 'react';
import useCurrency from '../../hooks/UseCurrency';
import {StyleAccountTheme} from '../../theme/AccountTheme';

interface Props {
  balance?: number;
}

export const MovementBalance = ({balance}: Props) => {
  const {currencyFormat} = useCurrency();
  return (
    <View style={StyleAccountTheme.container}>
      <Text
        style={StyleAccountTheme.balance}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {currencyFormat(balance ? balance : 0)}
      </Text>
      <Text style={StyleAccountTheme.txt}>Ingresos</Text>
    </View>
  );
};
