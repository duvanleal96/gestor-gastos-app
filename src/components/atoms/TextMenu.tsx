import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {styleMenuTheme} from '../../theme/MenuOptionsTheme';

export const TextMenu = () => {
  const {client} = useSelector((state: any) => state.client);
  return (
    <Text style={styleMenuTheme.userName}>
      Bienvenido {client ?? 'Duvan'}
    </Text>
  );
};
