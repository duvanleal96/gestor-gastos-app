import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/theme/LaunchTheme';
import LoginUserScreen from './src/screens/LoginUserScreen';

const App = () => {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text style={{ fontSize: 24, fontWeight: 'bold' }}>¡Hola Mundo! 🌍</Text>
    // </View>
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="black" />
    <LoginUserScreen />
  </SafeAreaView>
  );
};

export default App;
