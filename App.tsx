import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LaunchScreen from './src/screens/LaunchScreen';
import { styles } from './src/theme/LaunchTheme';

const App = () => {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text style={{ fontSize: 24, fontWeight: 'bold' }}>¡Hola Mundo! 🌍</Text>
    // </View>
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="black" />
    <LaunchScreen />
  </SafeAreaView>
  );
};

export default App;
