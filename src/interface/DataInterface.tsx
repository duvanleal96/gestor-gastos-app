export interface DataInterface {
  id: string;
  title: string;
  amount: number;
  image: string;
  date: string;
  income: string;
  outcome: string;
}
export interface profile {
  id: string;
  name: string;
  phone: string;
  created_at?: Date;
  updated_at?:Date;
}