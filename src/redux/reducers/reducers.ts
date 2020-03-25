import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';
import { AppActions } from '../../types/actions';
import signInUser from './auth';
import signUpUser from './sign-up';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = (state: any, action: AppActions) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    auth: signInUser(state, action),
    signUp: signUpUser(state, action),
  };
};

// export default reducer;

export default persistReducer(persistConfig, reducer);
