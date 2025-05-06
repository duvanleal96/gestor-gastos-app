import {Text, View} from 'react-native';
import React from 'react';
import useCurrency from '../hooks/UseCurrency';
import {FormInput} from '../components/molecules/FormInput';
import {MainButton} from '../components/atoms/MainButton';
import {StylePaymentTheme} from '../theme/PaymentTheme';
export const PaymentScreen = () => {
  const {currencyFormat} = useCurrency();
  const balance: number = 123456769;
  return (
    <View style={StylePaymentTheme.container}>
      <View style={StylePaymentTheme.titlecontainer}>
        <Text style={StylePaymentTheme.h1}>{currencyFormat(balance)}</Text>
        <Text style={StylePaymentTheme.h3}>Account balance</Text>
      </View>
      <FormInput
        icon="person"
        placeholder="User’s email or phone number"
        errorMsg="non-existent user account"
      />
      <FormInput
        icon="credit-card"
        placeholder="Amount"
        errorMsg="The amount exceeds the allowable limit"
      />
      <FormInput icon="message" placeholder="Reason" />
      <MainButton text="Send payment" width={92} />
    </View>
  );
};
