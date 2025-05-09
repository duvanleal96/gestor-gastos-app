// features/transactions/transactionsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { supabase } from '../../lib/supabase';
import { DataInterface } from '../../interface/DataInterface';

interface TransactionsState {
  items: DataInterface[];
  loading: boolean;
  error: string | null;
  balance: number;
  incomeTotal: number;
  expenseTotal: number;
}

const initialState: TransactionsState = {
  items: [],
  loading: false,
  error: null,
  balance: 0,
  incomeTotal: 0,
  expenseTotal: 0,
};

// Thunk para cargar transacciones
export const fetchMovements = createAsyncThunk(
  'transactions/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const session = supabase.auth.session();
      if (!session?.user?.id) {throw new Error('Usuario no autenticado');}

      const { data, error } = await supabase
        .from('transactions')
        .select(`
          id,
          amount,
          description,
          date,
          categories(name, type)
        `)
        .eq('user_id', session.user.id)
        .order('date', { ascending: false });
        console.log(data, 'informacion busqueda');
      if (error) {throw error;}
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const movementsSlice = createSlice({
  name: 'movements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovements.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;

        // Transformar datos de Supabase a DataInterface
        state.items = action.payload.map(movement => {
            const transactionType = movement.categories?.type; // 'expense' o 'income'
            const isExpense = transactionType === 'expense';
            const isIncome = transactionType === 'income';

            // Validación por si acaso no viene el type
            console.log(state, 'incomesss');
            console.log(transactionType, 'tipo');
            return {
              id: movement.id,
              title: movement.description,
              amount: isExpense ? -Math.abs(movement.amount) : Math.abs(movement.amount),
              date: movement.date,
              income: isIncome ? 'Ingreso' : '',
              outcome: isExpense ? 'Gasto' : '',
              category: movement.categories?.name,
              type: transactionType,
              image: 'https://reactjs.org/logo-og.png', // O usa una imagen por categoría
              originalAmount: movement.amount, // Guardamos el monto original por si acaso
            };
          });

        // Calcular totales ss
        state.incomeTotal = state.items
        .filter(item => item.type === 'income')
        .reduce((sum, item) => sum + Math.abs(item.amount), 0);

      state.expenseTotal = state.items
        .filter(item => item.type === 'expense')
        .reduce((sum, item) => sum + Math.abs(item.amount), 0);

      state.balance = state.incomeTotal - state.expenseTotal;
      })
      .addCase(fetchMovements.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default movementsSlice.reducer;
