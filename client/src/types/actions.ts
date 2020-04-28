import { BooksType } from './Books';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILED = 'FETCH_BOOKS_FAILED';
export const FILTER_BOOKS = 'FILTER_BOOKS';
export const BOOK_ADDED_TO_CART = 'BOOK_ADDED_TO_CART';
export const BOOK_REMOVED_FROM_CART = 'BOOK_REMOVED_FROM_CART';
export const ALL_BOOKS_REMOVED_FROM_CART = 'ALL_BOOKS_REMOVED_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const SIGN_IN_EMAIL_CHANGE = 'SIGN_IN_EMAIL_CHANGE';
export const SIGN_IN_PASSWORD_CHANGE = 'SIGN_IN_PASSWORD_CHANGE';
export const SIGN_UP_CHANGE_NAME = 'SIGN_UP_CHANGE_NAME';
export const SIGN_UP_CHANGE_EMAIL = 'SIGN_UP_CHANGE_EMAIL';
export const SIGN_UP_CHANGE_PASSWORD = 'SIGN_UP_CHANGE_PASSWORD';
export const SIGN_UP_CHANGE_CONFIRM_PASSWORD =
  'SIGN_UP_CHANGE_CONFIRM_PASSWORD';
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export interface BooksRequestedAction {
  type: typeof FETCH_BOOKS_REQUEST;
}

export interface BooksLoadedAction {
  type: typeof FETCH_BOOKS_SUCCESS;
  payload: BooksType[];
}

export interface BooksFailedAction {
  type: typeof FETCH_BOOKS_FAILED;
  payload: Error;
}

export interface FetchBooksAction {
  type: typeof FETCH_BOOKS;
}

export interface FilterBooksAction {
  type: typeof FILTER_BOOKS;
  payload: string;
}

export interface BookAddedToCartAction {
  type: typeof BOOK_ADDED_TO_CART;
  payload: BooksType;
}

export interface BookRemovedFromCartAction {
  type: typeof BOOK_REMOVED_FROM_CART;
  payload: BooksType;
}
export interface AllBooksRemovedFromCartAction {
  type: typeof ALL_BOOKS_REMOVED_FROM_CART;
  payload: BooksType;
}
export interface ClearCartAction {
  type: typeof CLEAR_CART;
}

export interface SignInEmailChangeAction {
  type: typeof SIGN_IN_EMAIL_CHANGE;
  payload: string;
}
export interface SignInPasswordChangeAction {
  type: typeof SIGN_IN_PASSWORD_CHANGE;
  payload: string;
}
export interface SignUpChangeNameAction {
  type: typeof SIGN_UP_CHANGE_NAME;
  payload: string;
}
export interface SignUpChangeEmailAction {
  type: typeof SIGN_UP_CHANGE_EMAIL;
  payload: string;
}
export interface SignUpChangePasswordAction {
  type: typeof SIGN_UP_CHANGE_PASSWORD;
  payload: string;
}
export interface SignUpChangeConfirmPasswordAction {
  type: typeof SIGN_UP_CHANGE_CONFIRM_PASSWORD;
  payload: string;
}

export interface GoogleSignInStartAction {
  type: typeof GOOGLE_SIGN_IN_START;
}

export interface EmailSignInStartAction {
  type: typeof EMAIL_SIGN_IN_START;
  payload: object;
}
export interface SignOutStartAction {
  type: typeof SIGN_OUT_SUCCESS;
}
export interface SignOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS;
}
export interface SignOutFailureAction {
  type: typeof SIGN_OUT_FAILURE;
  payload: Error;
}
export interface SignUpStartAction {
  type: typeof SIGN_UP_START;
  payload: any;
}
export interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
  payload: any;
}
export interface SignUpFailureAction {
  type: typeof SIGN_UP_FAILURE;
  payload: Error;
}
export interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: any;
}
export interface SignInFailureAction {
  type: typeof SIGN_IN_FAILURE;
  payload: Error;
}

export type FetchActionTypes =
  | BooksRequestedAction
  | BooksFailedAction
  | BooksLoadedAction
  | FetchBooksAction;

export type BooksActionTypes =
  | BookAddedToCartAction
  | BookRemovedFromCartAction
  | AllBooksRemovedFromCartAction
  | ClearCartAction;

export type FilterBooksActionTypes = FilterBooksAction;

export type SignInActionTypes =
  | SignInEmailChangeAction
  | SignInPasswordChangeAction;

export type SignUpActionTypes =
  | SignUpChangeNameAction
  | SignUpChangeEmailAction
  | SignUpChangePasswordAction
  | SignUpChangeConfirmPasswordAction;

export type GoogleSignInTypes = GoogleSignInStartAction;

export type EmailSignInTypes = EmailSignInStartAction;

export type SignOutTypes =
  | SignOutStartAction
  | SignOutSuccessAction
  | SignOutFailureAction;

export type SignUpTypes =
  | SignUpStartAction
  | SignUpSuccessAction
  | SignUpFailureAction;

export type SignInTypes = SignInSuccessAction | SignInFailureAction;

export type AppActions =
  | FetchActionTypes
  | BooksActionTypes
  | FilterBooksActionTypes
  | SignInActionTypes
  | SignUpActionTypes
  | GoogleSignInTypes
  | EmailSignInTypes
  | SignOutTypes
  | SignUpTypes
  | SignInTypes;
