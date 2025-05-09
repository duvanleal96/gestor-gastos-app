import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { supabase } from '../../lib/supabase';

// types/transaction.ts
export interface Transaction {
    id?: string;
    amount: number;
    description: string;
    category_id: number;
    date: string;
    user_id: string;
  }

  interface TransactionsState {
    items: Transaction[];
    loading: boolean;
    error: string | null;
  }

  const initialState: TransactionsState = {
    items: [],
    loading: false,
    error: null,
  };

  export const createTransaction = createAsyncThunk(
    'transactions/create',
    async (transactionData: Omit<Transaction, 'id'>, { rejectWithValue }) => {
      try {
        console.log(transactionData , 'aquieee error perro');
        const session = await supabase.auth.session()
        if (!session?.user?.id) {
          throw new Error('Usuario no autenticado');
        }
        const { data, error } = await supabase
          .from('transactions')
          .insert({...transactionData, user_id: session.user.id})
          .select();
          console.log(error , 'se supone que es error');
          console.log(data , 'se supone que data');
        if (error) {throw error;}
        console.log(error, 'error perro');
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
