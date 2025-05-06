import {View} from 'react-native';
import {MyDrawerContentComponentProps} from '../../interface/MyDrawerContentComponentProps';
import LogoLaunch from '../atoms/LogoLaunch';
import {IconsMenu} from '../molecules/IconsMenu';
import {TextMenu} from '../atoms/TextMenu';
import {styleMenuTheme} from '../../theme/MenuOptionsTheme';
import { useDispatch } from 'react-redux';
import { resetClient } from '../../redux/slices/ClientSlice';

export const MenuOptions = ({navigation}: MyDrawerContentComponentProps) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetClient()); // Limpia el estado en Redux
    navigation.reset({
      index: 0,
      routes: [{ name: 'home' }], // Redirige al login sin posibilidad de volver atrás
    });
  };
  return (
    <View style={styleMenuTheme.main}>
      <View>
        <TextMenu />
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
        <IconsMenu icon="close" text="Logout" action={handleLogout}/>
      </View>
    </View>
  );
};
