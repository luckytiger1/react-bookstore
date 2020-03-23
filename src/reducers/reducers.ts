import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';
import { AppActions } from '../types/actions';
import signInUser from './auth';
import signUpUser from './sign-up';

const reducer = (state: any, action: AppActions) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    auth: signInUser(state, action),
    signUp: signUpUser(state, action),
  };
};

export default reducer;
