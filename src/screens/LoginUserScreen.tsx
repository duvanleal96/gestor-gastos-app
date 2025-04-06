import React from 'react';
 import { stylesLoginUser } from '../theme/LoginUserTheme';
 import { View } from 'react-native';
import TitleLogin from '../components/molecules/TitleLogin';
import TitleLoginDesc from '../components/molecules/TitleLoginDesc';
import LoginInput from '../components/atoms/LoginInput';
import LoginButon from '../components/atoms/LoginButon';
import LogoLogin from '../components/atoms/LogoLogin';
 const LoginUserScreen = () => {
   return (
     <View style={stylesLoginUser.container}>
       <View style={stylesLoginUser.container1}>
         <LogoLogin />
         <TitleLogin />
         <TitleLoginDesc />
       </View>
       <View style={stylesLoginUser.container2}>
         <LoginInput />
         <LoginButon />
       </View>
     </View>
   );
 };
 
 export default LoginUserScreen;