import {View, Text} from 'react-native';
import React from 'react';
import { DataInterface } from '../../interface/DataInterface';
import { StyleAccountTheme } from '../../theme/AccountTheme';


  const renderItem = (itemData: {item: DataInterface}) => {
    const {item} = itemData;
    return (
      <View style={StyleAccountTheme.transactionItem}>
        <View style={StyleAccountTheme.transactionInfo}>
          <Text style={StyleAccountTheme.transactionTitle}>{item.title}</Text>
          <Text style={StyleAccountTheme.transactionDate}>
            {new Date(item.date).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </Text>
        </View>
        <Text style={[
          StyleAccountTheme.transactionAmount,
          item.income ? StyleAccountTheme.income : StyleAccountTheme.expense,
        ]}>
          {item.income ? `+$${item.amount.toLocaleString()}` : `-$${item.amount.toLocaleString()}`}
        </Text>
      </View>
    );
  };

export default renderItem;
