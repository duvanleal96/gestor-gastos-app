import {StyleSheet, View} from 'react-native';
import React from 'react';
import LogoLaunch from '../atoms/LogoLaunch';
import LogoTypeLogin from '../atoms/LogoTypeLogin';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <LogoLaunch />
      <LogoTypeLogin />
    </View>
  );
};
const styles = StyleSheet.create({
  logoContainer: {
    flex: 2,
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
  },
});

export default Logo;
