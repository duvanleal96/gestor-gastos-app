import React from 'react';
 import { Button, View, SafeAreaView, Alert } from 'react-native';
 
 const LoginButon = () => (
   <SafeAreaView>
     <View>
       <Button
         title="No Continue"
         onPress={() => Alert.alert('Simple Button pressed')}
       />
     </View>
   </SafeAreaView>
 );
 
 export default LoginButon;