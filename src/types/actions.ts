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
export const SIGN_IN_WITH_GOOGLE = 'SIGN_IN_WITH_GOOGLE';
export const SIGN_UP_CHANGE_NAME = 'SIGN_UP_CHANGE_NAME';
export const SIGN_UP_CHANGE_EMAIL = 'SIGN_UP_CHANGE_EMAIL';
export const SIGN_UP_CHANGE_PASSWORD = 'SIGN_UP_CHANGE_PASSWORD';
export const SIGN_UP_CHANGE_CONFIRM_PASSWORD =
  'SIGN_UP_CHANGE_CONFIRM_PASSWORD';

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
export interface SignInWithGoogleAction {
  type: typeof SIGN_IN_WITH_GOOGLE;
  payload: object;
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
  | SignInPasswordChangeAction
  | SignInWithGoogleAction;

export type SignUpActionTypes =
  | SignUpChangeNameAction
  | SignUpChangeEmailAction
  | SignUpChangePasswordAction
  | SignUpChangeConfirmPasswordAction;

export type AppActions =
  | FetchActionTypes
  | BooksActionTypes
  | FilterBooksActionTypes
  | SignInActionTypes
  | SignUpActionTypes;
