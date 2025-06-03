import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { MovementScreen } from '../src/screens/MovementScreen';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// Mock de las dependencias
jest.mock('../src/lib/supabase', () => ({
  supabase: {
    from: jest.fn().mockReturnThis(),
    on: jest.fn().mockReturnThis(),
    subscribe: jest.fn(),
    removeSubscription: jest.fn(),
  },
}));



describe('MovementScreen', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        movements: () => ({
        items: [],
        loading: false,
        error: null,
        balance: 1000,
        incomeTotal: 2000,
        expenseTotal: 1000,
      }),
    },
    });
    jest.clearAllMocks();
  });

  it('debería mostrar el indicador de carga cuando loading es true y no hay items', () => {
    store = configureStore({
      reducer: {
        movements: () => ({
        items: [],
        loading: true,
        error: null,
        balance: 0,
        incomeTotal: 0,
        expenseTotal: 0,
      }),
    },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <MovementScreen />
      </Provider>
    );

    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('debería mostrar mensaje de error cuando hay un error', () => {
    const errorMessage = 'Error al cargar los movimientos';
    store = configureStore({
      reducer: {
        movements: (state = {}) => state,
      },
      preloadedState: {
      movements: {
        items: [],
        loading: false,
        error: errorMessage,
        balance: 0,
        incomeTotal: 0,
        expenseTotal: 0,
      },
    },
    });

    const { getByText } = render(
      <Provider store={store}>
        <MovementScreen />
      </Provider>
    );

    expect(getByText(`Error: ${errorMessage}`)).toBeTruthy();
  });

  it('debería mostrar la lista de movimientos y el balance', () => {
    const mockMovements = [
      { id: '1', amount: 100, type: 'income', description: 'Salario' },
      { id: '2', amount: -50, type: 'expense', description: 'Compras' },
    ];

    store = configureStore({
      reducer: {
        movements: (state = {}) => state,
      },
      preloadedState: {
      movements: {
        items: mockMovements,
        loading: false,
        error: null,
        balance: 50,
        incomeTotal: 100,
        expenseTotal: 50,
      },
    },
    });

    const { getByText } = render(
      <Provider store={store}>
        <MovementScreen />
      </Provider>
    );

    expect(getByText('Balance: +50')).toBeTruthy();
  });

  it('debería actualizar los movimientos al hacer refresh', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MovementScreen />
      </Provider>
    );

    const flatList = getByTestId('movement-list');
fireEvent(flatList, 'refresh');

    await waitFor(() => {
      const actions = store.getActions();
      expect(actions).toContainEqual(expect.objectContaining({
        type: 'movements/fetchMovements/pending',
      }));
    });
  });
});
