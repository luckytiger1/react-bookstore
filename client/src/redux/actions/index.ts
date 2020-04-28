import {
  AppActions,
  SIGN_IN_EMAIL_CHANGE,
  SIGN_IN_PASSWORD_CHANGE,
  SIGN_UP_CHANGE_NAME,
  SIGN_UP_CHANGE_EMAIL,
  SIGN_UP_CHANGE_PASSWORD,
  SIGN_UP_CHANGE_CONFIRM_PASSWORD,
} from '../../types/actions';
import {
  booksRequested,
  booksLoaded,
  booksFailed,
  fetchBooks,
} from './fetchBooks';
import {
  filterBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} from './changeBooks';

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
  signUpChangeName,
  signUpChangeEmail,
  signUpChangePassword,
  signUpChangeConfirmPassword,
};
