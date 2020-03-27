import { BooksType } from './Books';

export type SignInUserState = {
  email: string;
  password: string;
  currentUser: null | object;
};

export type SignUpUserState = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type UpdateShoppingCartState = {
  cartItems: BooksType[] | undefined;
  orderTotal: number;
};
