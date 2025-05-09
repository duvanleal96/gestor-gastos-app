export interface MovementInterface {
  id: string;
  idIncome: string;
  idOutcome: string;
  reason: string;
  amount: string;
  fees: number;
  date: Date;
}
// types/transaction.ts
export interface Transaction {
    id?: string;
    amount: number;
    description: string;
    category_id: number;
    date: string;
    user_id: string;
  }

 export interface TransactionsState {
    items: Transaction[];
    loading: boolean;
    error: string | null;
  }

  export const initialState: TransactionsState = {
    items: [],
    loading: false,
    error: null,
  };
