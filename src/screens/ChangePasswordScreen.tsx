import { View } from 'react-native';
import React from 'react';
import { MainButton } from '../components/atoms/MainButton';
import { FormInput } from '../components/molecules/FormInput';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';
import { styles } from '../theme/GestorTheme';

export const ChangePasswordScreen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View style={styles.main}>
      <View>
        <FormInput icon="person" placeholder="Current password" />
        <FormInput icon="mail" placeholder="New password" />
        <FormInput icon="location-on" placeholder="Retype new password" />
      </View>
      <View>
        <MainButton text="Change password" width={92} />
        <MainButton
          backgroundColor="white"
          color="black"
          text="Cancel"
          width={92}
          action={() => navigation.navigate('TabNavigation')}
        />
      </View>
    </View>
  );
};
