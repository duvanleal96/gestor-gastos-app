import { StyleSheet } from 'react-native';

 export const stylesLoginUser = StyleSheet.create({
   container: {
     flex: 1,
   },
   container1: {
     flex: 1,
   },
   container2: {
     flex: 1,
   },
   logo: {
     width: 80,
     height: 80,
     left: '35%',
   },
   input: {
     height: 40,
     width: 250,
     borderWidth: 0.23,
     padding: 1,
     textAlign: 'center',
     bottom: 10,
   },
   text: {
     position: 'relative',
     color: 'black',
     fontSize: 19,
     textAlign: 'center',
   },
   fixToText: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   title: {
     position: 'relative',
     color: 'black',
     fontSize: 15,
     textAlign: 'center',
     fontFamily: 'arial',
     bottom: -100,
   },
 });
