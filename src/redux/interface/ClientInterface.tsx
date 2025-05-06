export interface ClientInterface {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  state: number;
  createdAt: Date;
  updatedAt: Date | null;
}
