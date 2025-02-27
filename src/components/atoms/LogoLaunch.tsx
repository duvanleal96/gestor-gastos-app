import React from 'react';
import { Image } from 'react-native';

const LogoLaunch = () => {
  return (
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ width: 400, height: 500 }}
      source={require('../../../assets/images/logo.png')}
    />
  );
};

export default LogoLaunch;