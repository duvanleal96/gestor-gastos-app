export interface DataInterface {
  id: string;
  title: string;
  amount: number;
  image?: string;
  date: string;
  income: string;
  outcome: string;
  category?: string;
  type?:string; // Nuevo campo para categorías
}
export interface profile {
  id: string;
  name: string;
  phone: string;
  created_at?: Date;
  updated_at?:Date;
}
