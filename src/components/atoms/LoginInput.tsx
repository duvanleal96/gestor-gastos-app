import React from 'react';
 import { SafeAreaView, TextInput } from 'react-native';
 import { stylesLoginUser } from '../../theme/LoginUserTheme';

 const LoginInput = () => {
   const [text, onChangeText] = React.useState('');
   return (
     <SafeAreaView>
       <TextInput
         style={stylesLoginUser.input}
         onChangeText={onChangeText}
         value={text}
         placeholder={'Email or Username'}
       />
     </SafeAreaView>
   );
 };
 
 export default LoginInput;