import { BooksType } from './Books';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILED = 'FETCH_BOOKS_FAILED';
export const FILTER_BOOKS = 'FILTER_BOOKS';
export const BOOK_ADDED_TO_CART = 'BOOK_ADDED_TO_CART';
export const BOOK_REMOVED_FROM_CART = 'BOOK_REMOVED_FROM_CART';
export const ALL_BOOKS_REMOVED_FROM_CART = 'ALL_BOOKS_REMOVED_FROM_CART';

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

export interface FilterBooksAction {
  type: typeof FILTER_BOOKS;
  payload: string;
}

export interface BookAddedToCartAction {
  type: typeof BOOK_ADDED_TO_CART;
  payload: string;
}

export interface BookRemovedFromCartAction {
  type: typeof BOOK_REMOVED_FROM_CART;
  payload: string;
}

export interface AllBooksRemovedFromCartAction {
  type: typeof ALL_BOOKS_REMOVED_FROM_CART;
  payload: string;
}

export type FetchActionTypes =
  | BooksRequestedAction
  | BooksFailedAction
  | BooksLoadedAction;

export type BooksActionTypes =
  | BookAddedToCartAction
  | BookRemovedFromCartAction
  | AllBooksRemovedFromCartAction;

export type FilterBooksActionTypes = FilterBooksAction;

export type AppActions =
  | FetchActionTypes
  | BooksActionTypes
  | FilterBooksActionTypes;
