import React from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from '../theme/LaunchTheme';
import LogoLaunch from '../components/atoms/LogoLaunch';

const LaunchScreen = () => {
  return (
    <View style={styles.container} testID="launch-container">
      <StatusBar />
      <LogoLaunch />
    </View>
  );
};
export default LaunchScreen;
