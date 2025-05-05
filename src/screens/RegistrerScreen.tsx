import React from 'react';
import {View} from 'react-native';
import {FormInput} from '../components/molecules/FormInput';
import {StyleRegistrerTheme} from '../theme/RegistrerTheme';
import {MainButton} from '../components/atoms/MainButton';

export const RegistrerScreen = () => {
  return (
    <View style={StyleRegistrerTheme.container}>
      <FormInput icon="photo" placeholder="Photo" />
      <FormInput icon="message" placeholder="Name and lastname" />
      <FormInput icon="email" placeholder="Email" />
      <FormInput icon="phone" placeholder="Phone" />
      <FormInput icon="lock" placeholder="Password" />
      <FormInput icon="lock" placeholder="Confirm password" />
      <MainButton text={'Registrer'} />
    </View>
  );
};
