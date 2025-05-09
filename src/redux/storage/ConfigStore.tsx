import { configureStore } from '@reduxjs/toolkit';
import ClientReducer from '../slices/ClientSlice';
import transactionReducer from '../slices/TransactionSlice';
import movementsReducer from '../slices/MovementsSlice';

export const ConfigStorage = configureStore({
  reducer: {
    client: ClientReducer,
    transactions: transactionReducer,
    movements: movementsReducer,
  },
});

export type RootState = ReturnType<typeof ConfigStorage.getState>;
export type AppDispatch = typeof ConfigStorage.dispatch;
