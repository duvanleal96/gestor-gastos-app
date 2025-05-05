import React from 'react';
import { Image } from 'react-native';
import { styles } from '../../theme/LaunchTheme';

const LogoLaunch = () => {
  return (
    <Image
      style={styles.logo}
      source={require('../../../assets/images/logo.png')}
    />
  );
};

export default LogoLaunch;