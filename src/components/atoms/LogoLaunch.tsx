import React from 'react';
import { Image } from 'react-native';
import { styles } from '../../theme/LaunchTheme';

const LogoLaunch = () => {
  return (
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
      style={styles.logo}
      source={require('../../../assets/images/logo.png')}
    />
  );
};

export default LogoLaunch;