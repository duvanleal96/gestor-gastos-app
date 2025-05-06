import {StyleSheet} from 'react-native';

export const styleMenuTheme = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 16,
  },
  container: {
    alignItems: 'center',
    top: 400,
    backgroundColor: 'white',
  },
  containerPhoto: {
    alignItems: 'center',
    top: 30,
  },
  textAccountName: {
    fontSize: 23,
    alignSelf: 'center',
    fontWeight: '500',
    color: 'black',
    marginBottom: 60,
  },
  containerRule: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    top: 180,
    backgroundColor: 'white',
  },
  icons: {
    top: 70,
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 600,
    alignSelf: 'center',
    margin: 10,
    marginTop: 30,
  },
});
