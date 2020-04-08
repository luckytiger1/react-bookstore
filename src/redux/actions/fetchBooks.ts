import {
  AppActions,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  FETCH_BOOKS,
} from '../../types/actions';
import { BooksType } from '../../types/Books';

const booksRequested = (): AppActions => {
  return {
    type: FETCH_BOOKS_REQUEST,
  };
};

const booksLoaded = (newBooks: BooksType[]): AppActions => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: newBooks,
  };
};

const booksFailed = (error: Error): AppActions => {
  return {
    type: FETCH_BOOKS_FAILED,
    payload: error,
  };
};

const fetchBooks = () => {
  return {
    type: FETCH_BOOKS,
  };
};

export { booksRequested, booksLoaded, booksFailed, fetchBooks };
