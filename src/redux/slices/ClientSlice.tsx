import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientInterface } from '../interface/ClientInterface';

export const initialState: ClientInterface = {
  id: '',
  name: '',
  email: '',
  phone: '',
  photo: 'https://reactjs.org/logo-og.png',
  state: 1,
  createdAt: '',
  updatedAt: null,
};

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClient: (state, action: PayloadAction<Partial<ClientInterface>>) => {
      return { ...state, ...action.payload };
    },
    resetClient: () => {
      return initialState;
    },
  },
});

export const { setClient, resetClient } = clientSlice.actions;
export default clientSlice.reducer;
