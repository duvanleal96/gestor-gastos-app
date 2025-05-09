import { configureStore } from '@reduxjs/toolkit';
import ClientReducer from '../slices/ClientSlice';
import transactionReducer from '../slices/TransactionSlice';

export const ConfigStorage = configureStore({
  reducer: {
    client: ClientReducer,
    transactions: transactionReducer,
  },
});

export type RootState = ReturnType<typeof ConfigStorage.getState>;
export type AppDispatch = typeof ConfigStorage.dispatch;
