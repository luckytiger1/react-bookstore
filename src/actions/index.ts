import { Dispatch } from 'redux';
import { BooksType } from '../types/Books';
import { AppActions } from '../types/actions';

const booksRequested = (): AppActions => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};

const booksLoaded = (newBooks: BooksType[]): AppActions => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

const booksFailed = (error: Error): AppActions => {
  return {
    type: 'FETCH_BOOKS_FAILED',
    payload: error,
  };
};

const filterBooks = (term: string): AppActions => {
  return {
    type: 'FILTER_BOOKS',
    payload: term,
  };
};

// const fetchBooksOld = (bookstoreService, dispatch) => async () => {
//   dispatch(booksRequested());
//   try {
//     const data = await bookstoreService.getBooks();
//     dispatch(booksLoaded(data));
//   } catch (error) {
//     dispatch(booksFailed(error));
//   }
// };

const fetchBooks = (bookstoreService: {
  getBooks: () => Promise<BooksType[]>;
}) => () => async (dispatch: Dispatch<AppActions>) => {
  dispatch(booksRequested());
  try {
    const data = await bookstoreService.getBooks();
    dispatch(booksLoaded(data));
  } catch (error) {
    dispatch(booksFailed(error));
  }
};

const bookAddedToCart = (bookId: string): AppActions => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  };
};

const bookRemovedFromCart = (bookId: string): AppActions => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId,
  };
};

const allBooksRemovedFromCart = (bookId: string): AppActions => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId,
  };
};

export {
  fetchBooks,
  filterBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
};
