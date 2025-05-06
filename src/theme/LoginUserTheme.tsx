import { StyleSheet } from 'react-native';

export const stylesLoginUser = StyleSheet.create({
  // ... (mantén los estilos existentes y añade/modifica estos)
  container: {
    justifyContent: 'center',
    backgroundColor: '#EAF4FF',  // Fondo blanco
    paddingHorizontal: 24,
  },
  title: {
    color: 'rgba(0, 0, 0, 0.87)',  // Negro 87% opacidad (Material Design)
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 32,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',  // Fondo sutil
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.23)',  // Borde más suave
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#1976D2',  // Azul Material Design
    height: 48,
    width: '100%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,  // Sombra (Android)
    shadowColor: '#000',  // Sombra (iOS)
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  registerText: {
    color: '#1976D2',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },

});
