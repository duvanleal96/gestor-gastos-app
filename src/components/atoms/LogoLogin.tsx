import React from 'react';
 import { Image } from 'react-native';
 import { stylesLoginUser } from '../../theme/LoginUserTheme';

 const LogoLogin = () => {
   return (
     <Image
       style={stylesLoginUser.logo}
       source={require('../../../assets/images/logo.png')}
     />
   );
 };

 export default LogoLogin;
