import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  size?: number;
  customStyle?: any;
}

const LogoTypeLogin = ({ size }: Props) => {
  return (
    <Text style={getTextStyles(size)}>
      GESTOR <Text style={style.prupleText}>APP</Text>
    </Text>
  );
};

function getTextStyles(size?: number, customStyle?: any) {
  return size
    ? { ...style.textLogo, fontSize: size, ...customStyle }
    : style.textLogo;
}
export default LogoTypeLogin;

const style = StyleSheet.create({
  textLogo: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'Montserrat',
    bottom: -50,
  },
  prupleText: {
    color: 'black',
  },
});