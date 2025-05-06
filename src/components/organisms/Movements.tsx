import {View, Text, Image} from 'react-native';
import React from 'react';
import {StyleAccountTheme} from '../../theme/AccountTheme';

interface Props {
  id: string;
  title: string;
  amount: number;
  image: string;
  date: string;
  income?: string;
  outcome?: string;
}

const Movements = ({title, amount, image, date, income}: Props) => {
  const currencyFormat = (number: number) => {
    return (
      '$' +
      Number(number)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };
  return (
    <View style={StyleAccountTheme.transaction}>
      <View>
        <Image
          source={{uri: image}}
          // source={require('../assets/images/9E2.jpg')}
          style={StyleAccountTheme.image}
        />
      </View>
      <View style={StyleAccountTheme.textContainer}>
        <Text style={StyleAccountTheme.reason} numberOfLines={1}>
          {title}
        </Text>
        <Text style={StyleAccountTheme.date}>{date}</Text>
      </View>

      <Text
        style={{
          ...(income === ''
            ? StyleAccountTheme.outcomeAmount
            : StyleAccountTheme.incomeAmount),
        }}>
        {currencyFormat(amount)}
      </Text>
    </View>
  );
};

export default Movements;
