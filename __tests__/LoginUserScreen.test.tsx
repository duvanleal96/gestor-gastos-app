import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Toast from 'react-native-toast-message';
import LoginUserScreen from '../src/screens/LoginUserScreen';
import { supabase } from '../src/lib/supabase';

// Mock de las dependencias
jest.mock('../src/lib/supabase', () => ({
  supabase: {
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn(),
  },
}));

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

// Mock para la navegación
const mockNavigation = {
  navigate: jest.fn(),
  isFocused: jest.fn().mockReturnValue(true),
};

describe('LoginUserScreen', () => {
  beforeEach(() => {
    // Limpiar todos los mocks antes de cada prueba
    jest.clearAllMocks();
  });

  it('debería mostrar un error cuando el email no es válido', async () => {
    // Arrange
    const invalidEmail = 'correo-invalido';
    const expectedErrorType = 'error';
    const expectedErrorTitle = 'Error';
    const expectedErrorMessage = 'Por favor digite un correo válido';

    const { getByPlaceholderText, getByText } = render(
      <LoginUserScreen navigation={mockNavigation as any} route={{} as any} />
    );

    const emailInput = getByPlaceholderText('Email');
    const continueButton = getByText('CONTINUAR');

    // Act
    fireEvent.changeText(emailInput, invalidEmail);
    fireEvent.press(continueButton);

    // Assert
    expect(Toast.show).toHaveBeenCalledWith({
      type: expectedErrorType,
      text1: expectedErrorTitle,
      text2: expectedErrorMessage,
    });
    expect(mockNavigation.navigate).not.toHaveBeenCalled();
  });

  it('debería navegar a la pantalla de contraseña cuando el email existe', async () => {
    // Arrange
    const validEmail = 'usuario@ejemplo.com';
    const expectedScreen = 'PasswordUserScreen';
    const expectedParams = { email: validEmail };

    // Mock de la respuesta de Supabase
    (supabase.from('profiles').select().eq('email', validEmail).single as jest.Mock).mockResolvedValue({
      data: {id: '123'},
      error: null,
    });

    const { getByPlaceholderText, getByText } = render(
      <LoginUserScreen navigation={mockNavigation as any} route={{} as any} />
    );

    const emailInput = getByPlaceholderText('Email');
    const continueButton = getByText('CONTINUAR');

    // Act
    fireEvent.changeText(emailInput, validEmail);
    fireEvent.press(continueButton);

    // Assert
    await waitFor(() => {
      expect(mockNavigation.navigate).toHaveBeenCalledWith(
        expectedScreen,
        expectedParams
      );
    });
  });

  it('debería mostrar un error cuando el email no existe en la base de datos', async () => {
    // Arrange
    const nonExistentEmail = 'noexiste@ejemplo.com';
    const expectedErrorType = 'error';
    const expectedErrorTitle = 'Error';
    const expectedErrorMessage = 'Lo siento, no hemos encontrado el correo';

    // Mock de la respuesta de Supabase para email no existente
    (supabase.from('profiles').select().eq('email', nonExistentEmail).single as jest.Mock).mockResolvedValue({
      data: { id: '123' },
      error: { message: 'No se encontró el registro' },
    });

    const { getByPlaceholderText, getByText } = render(
      <LoginUserScreen navigation={mockNavigation as any} route={{} as any} />
    );

    const emailInput = getByPlaceholderText('Email');
    const continueButton = getByText('CONTINUAR');

    // Act
    fireEvent.changeText(emailInput, nonExistentEmail);
    fireEvent.press(continueButton);

    // Assert
    await waitFor(() => {
      expect(Toast.show).toHaveBeenCalledWith({
        type: expectedErrorType,
        text1: expectedErrorTitle,
        text2: expectedErrorMessage,
      });
    });
    expect(mockNavigation.navigate).not.toHaveBeenCalledWith('PasswordUserScreen', expect.anything());
  });

  it('debería navegar a la pantalla de registro al presionar el botón de registro', () => {
    // Arrange
    const email = 'usuario@ejemplo.com';
    const expectedScreen = 'RegisterScreen';
    const expectedParams = { email };

    const { getByPlaceholderText, getByText } = render(
      <LoginUserScreen navigation={mockNavigation as any} route={{} as any} />
    );

    const emailInput = getByPlaceholderText('Email');
    const registerButton = getByText('Registrar');

    // Act
    fireEvent.changeText(emailInput, email);
    fireEvent.press(registerButton);

    // Assert
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      expectedScreen,
      expectedParams
    );
  });
});
