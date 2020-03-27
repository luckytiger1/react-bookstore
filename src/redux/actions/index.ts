import { BooksType } from '../../types/Books';
import {
  AppActions,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  FILTER_BOOKS,
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  ALL_BOOKS_REMOVED_FROM_CART,
  FETCH_BOOKS,
  SIGN_IN_EMAIL_CHANGE,
  SIGN_IN_PASSWORD_CHANGE,
  SIGN_IN_WITH_GOOGLE,
  SIGN_UP_CHANGE_NAME,
  SIGN_UP_CHANGE_EMAIL,
  SIGN_UP_CHANGE_PASSWORD,
  SIGN_UP_CHANGE_CONFIRM_PASSWORD,
} from '../../types/actions';

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

const filterBooks = (term: string): AppActions => {
  return {
    type: FILTER_BOOKS,
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

// const fetchBooks = (bookstoreService: {
//   getBooks: () => Promise<BooksType[]>;
// }) => () => async (dispatch: Dispatch<AppActions>) => {
//   dispatch(booksRequested());
//   try {
//     const data = await bookstoreService.getBooks();
//     dispatch(booksLoaded(data));
//   } catch (error) {
//     dispatch(booksFailed(error));
//   }
// };

const fetchBooks = () => {
  return {
    type: FETCH_BOOKS,
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

const signInEmailChange = (email: string): AppActions => {
  return {
    type: SIGN_IN_EMAIL_CHANGE,
    payload: email,
  };
};
const signInPasswordChange = (password: string): AppActions => {
  return {
    type: SIGN_IN_PASSWORD_CHANGE,
    payload: password,
  };
};

const signInWithGoogle = (user: object): AppActions => {
  return {
    type: SIGN_IN_WITH_GOOGLE,
    payload: user,
  };
};

const signUpChangeName = (name: string): AppActions => {
  return {
    type: SIGN_UP_CHANGE_NAME,
    payload: name,
  };
};

const signUpChangeEmail = (email: string): AppActions => {
  return {
    type: SIGN_UP_CHANGE_EMAIL,
    payload: email,
  };
};
const signUpChangePassword = (password: string): AppActions => {
  return {
    type: SIGN_UP_CHANGE_PASSWORD,
    payload: password,
  };
};
const signUpChangeConfirmPassword = (confirmPassword: string): AppActions => {
  return {
    type: SIGN_UP_CHANGE_CONFIRM_PASSWORD,
    payload: confirmPassword,
  };
};
export {
  booksRequested,
  booksLoaded,
  booksFailed,
  fetchBooks,
  filterBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
  signInEmailChange,
  signInPasswordChange,
  signInWithGoogle,
  signUpChangeName,
  signUpChangeEmail,
  signUpChangePassword,
  signUpChangeConfirmPassword,
};
