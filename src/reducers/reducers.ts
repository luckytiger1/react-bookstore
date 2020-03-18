import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';
import { AppActions } from '../types/actions';

const reducer = (state: any, action: AppActions) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
};

export default reducer;
