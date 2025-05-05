import { Text, View } from 'react-native';
import { styles } from '../theme/GestorTheme';
import React from 'react';

export const ChangeThemeScreen = () => {
  return (
    <View style={styles.main}>
      <Text>Aqui se cambian los temas</Text>
    </View>
  );
};
