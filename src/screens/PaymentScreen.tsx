import {Text, View} from 'react-native';
import React from 'react';
import useCurrency from '../hooks/UseCurrency';
import {FormInput} from '../components/molecules/FormInput';
import {MainButton} from '../components/atoms/MainButton';
import {StylePaymentTheme} from '../theme/PaymentTheme';
export const PaymentScreen = () => {
  const {currencyFormat} = useCurrency();
  const balance: number = 20;
  return (
    <View style={StylePaymentTheme.container}>
      <View style={StylePaymentTheme.titlecontainer}>
        <Text style={StylePaymentTheme.h1}>{currencyFormat(balance)}</Text>
        <Text style={StylePaymentTheme.h3}>Registro Ingresos y Egresos</Text>
      </View>
      <FormInput
        icon="person"
        placeholder="categoría"
        errorMsg="non-existent user account"
      />
      <FormInput
        icon="credit-card"
        placeholder="Monto"
        errorMsg="The amount exceeds the allowable limit"
      />
      <FormInput icon="message" placeholder="comentario" />
      <MainButton text="Send payment" width={92} />
    </View>
  );
};
