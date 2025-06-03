import { configureStore } from '@reduxjs/toolkit';
import ClientReducer from '../slices/ClientSlice';
import transactionReducer from '../slices/TransactionSlice';
import movementsReducer from '../slices/MovementsSlice';
import userReducer from '../slices/UserSlice';

export const ConfigStorage = configureStore({
  reducer: {
    client: ClientReducer,
    transactions: transactionReducer,
    movements: movementsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof ConfigStorage.getState>;
export type AppDispatch = typeof ConfigStorage.dispatch;
