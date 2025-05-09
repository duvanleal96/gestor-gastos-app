
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  LoginUserScreen: undefined;
  PasswordUserScreen: { email: string };
  RegisterScreen: { email?: string };
  TabNavigation: undefined;
};


export type MyStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;