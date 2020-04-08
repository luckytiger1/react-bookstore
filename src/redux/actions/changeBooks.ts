import { BooksType } from '../../types/Books';
import {
  AppActions,
  FILTER_BOOKS,
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  ALL_BOOKS_REMOVED_FROM_CART,
} from '../../types/actions';

const filterBooks = (term: string): AppActions => {
  return {
    type: FILTER_BOOKS,
    payload: term,
  };
};

const bookAddedToCart = (item: BooksType): AppActions => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: item,
  };
};

const bookRemovedFromCart = (item: BooksType): AppActions => {
  return {
    type: BOOK_REMOVED_FROM_CART,
    payload: item,
  };
};

const allBooksRemovedFromCart = (item: BooksType): AppActions => {
  return {
    type: ALL_BOOKS_REMOVED_FROM_CART,
    payload: item,
  };
};

export {
  filterBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
};
