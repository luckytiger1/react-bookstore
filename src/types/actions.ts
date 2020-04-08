import { BooksType } from './Books';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILED = 'FETCH_BOOKS_FAILED';
export const FILTER_BOOKS = 'FILTER_BOOKS';
export const BOOK_ADDED_TO_CART = 'BOOK_ADDED_TO_CART';
export const BOOK_REMOVED_FROM_CART = 'BOOK_REMOVED_FROM_CART';
export const ALL_BOOKS_REMOVED_FROM_CART = 'ALL_BOOKS_REMOVED_FROM_CART';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const SIGN_IN_EMAIL_CHANGE = 'SIGN_IN_EMAIL_CHANGE';
export const SIGN_IN_PASSWORD_CHANGE = 'SIGN_IN_PASSWORD_CHANGE';
export const SIGN_UP_CHANGE_NAME = 'SIGN_UP_CHANGE_NAME';
export const SIGN_UP_CHANGE_EMAIL = 'SIGN_UP_CHANGE_EMAIL';
export const SIGN_UP_CHANGE_PASSWORD = 'SIGN_UP_CHANGE_PASSWORD';
export const SIGN_UP_CHANGE_CONFIRM_PASSWORD =
  'SIGN_UP_CHANGE_CONFIRM_PASSWORD';
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const GOOGLE_SIGN_IN_SUCCESS = 'GOOGLE_SIGN_IN_SUCCESS';
export const GOOGLE_SIGN_IN_FAILURE = 'GOOGLE_SIGN_IN_FAILURE';
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const EMAIL_SIGN_IN_SUCCESS = 'EMAIL_SIGN_IN_SUCCESS';
export const EMAIL_SIGN_IN_FAILURE = 'EMAIL_SIGN_IN_FAILURE';

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
export interface GoogleSignInSuccessAction {
  type: typeof GOOGLE_SIGN_IN_SUCCESS;
  payload: object;
}
export interface GoogleSignInFailureAction {
  type: typeof GOOGLE_SIGN_IN_FAILURE;
  payload: Error;
}
export interface EmailSignInStartAction {
  type: typeof EMAIL_SIGN_IN_START;
  payload: object;
}
export interface EmailSignInSuccessAction {
  type: typeof EMAIL_SIGN_IN_SUCCESS;
  payload: object;
}
export interface EmailSignInFailureAction {
  type: typeof EMAIL_SIGN_IN_FAILURE;
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
  | AllBooksRemovedFromCartAction;

export type FilterBooksActionTypes = FilterBooksAction;

export type SignInActionTypes =
  | SignInEmailChangeAction
  | SignInPasswordChangeAction;

export type SignUpActionTypes =
  | SignUpChangeNameAction
  | SignUpChangeEmailAction
  | SignUpChangePasswordAction
  | SignUpChangeConfirmPasswordAction;

export type GoogleSignInTypes =
  | GoogleSignInStartAction
  | GoogleSignInSuccessAction
  | GoogleSignInFailureAction;

export type EmailSignInTypes =
  | EmailSignInStartAction
  | EmailSignInSuccessAction
  | EmailSignInFailureAction;

export type AppActions =
  | FetchActionTypes
  | BooksActionTypes
  | FilterBooksActionTypes
  | SignInActionTypes
  | SignUpActionTypes
  | GoogleSignInTypes
  | EmailSignInTypes;
