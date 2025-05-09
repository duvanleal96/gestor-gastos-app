import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { supabase } from '../../lib/supabase';
import { Transaction, initialState } from '../interface/MovementInterface';

  export const createTransaction = createAsyncThunk(
    'transactions/create',
    async (transactionData: Omit<Transaction, 'id'>, { rejectWithValue }) => {
      try {
        const session = await supabase.auth.session()
        if (!session?.user?.id) {
          throw new Error('Usuario no autenticado');
        }
        const { data, error } = await supabase
          .from('transactions')
          .insert({...transactionData, user_id: session.user.id})
          .select();
        if (error) {throw error;}
        return data[0] as Transaction;
      } catch (error: any) {
        return rejectWithValue(error.message as string);
      }
    }
  );

  const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createTransaction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createTransaction.fulfilled, (state, action: PayloadAction<Transaction>) => {
          state.loading = false;
          state.items.unshift(action.payload);
        })
        .addCase(createTransaction.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

  export default transactionsSlice.reducer;
