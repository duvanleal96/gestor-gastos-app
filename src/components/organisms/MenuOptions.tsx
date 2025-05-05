import {View} from 'react-native';
import React from 'react';
import {MyDrawerContentComponentProps} from '../../interface/MyDrawerContentComponentProps';
import {stylesLoginUser} from '../../theme/LoginUserTheme';
import LogoLaunch from '../atoms/LogoLaunch';
import {IconsMenu} from '../molecules/IconsMenu';
import {TextMenu} from '../atoms/TextMenu';
import {styleMenuTheme} from '../../theme/MenuOptionsTheme';

export const MenuOptions = ({navigation}: MyDrawerContentComponentProps) => {
  return (
    <View style={styleMenuTheme.main}>
      <View>
        <TextMenu />
      </View>
      <View style={styleMenuTheme.containerRule}>
        <View style={stylesLoginUser.line} />
      </View>
      <View style={styleMenuTheme.container}>
        <LogoLaunch />
      </View>
      <View style={styleMenuTheme.icons}>
        <IconsMenu
          text="Change password"
          icon="settings"
          action={() => navigation.navigate('ChangePasswordScreen')}
        />
        <IconsMenu
          text="Change App Theme"
          icon="bookmark"
          action={() => navigation.navigate('ChangeThemeScreen')}
        />
        <IconsMenu icon="close" text="Logout" />
      </View>
    </View>
  );
};
