// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';
import signInUser from './auth';
import signUpUser from './sign-up';
import userReducer from './user';

// const persistConfig = {
// key: 'root',
// storage,
// };

const reducer = combineReducers({
  bookList: updateBookList,
  shoppingCart: updateShoppingCart,
  auth: signInUser,
  signUp: signUpUser,
  user: userReducer,
});

// function rootReducer(state, action) {
//   const intermediateState = reducer(state, action);
//   console.log(intermediateState);

//   const finalState = updateShoppingCart(intermediateState, action);
//   return finalState;
// }

// export default reducer;

export default reducer;
