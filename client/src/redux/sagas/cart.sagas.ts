import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import {
  SIGN_OUT_SUCCESS,
  SIGN_IN_SUCCESS,
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  ALL_BOOKS_REMOVED_FROM_CART,
} from '../../types/actions';
import { clearCart, setCartFromFirebase } from '../actions/changeBooks';
import { getUserCartRef } from '../../firebase/firebase.utils';
import selectCurrentUser from '../selectors/userSelectors';
import { selectCartItems } from '../selectors/cartSelectors';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* updateCartItemsInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

function* checkCartFromFirebase({ payload: user }: any) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

function* onUserSignIn() {
  yield takeLatest(SIGN_IN_SUCCESS, checkCartFromFirebase);
}

function* onCartChange() {
  yield takeLatest(
    [BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, ALL_BOOKS_REMOVED_FROM_CART],
    updateCartItemsInFirebase,
  );
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onUserSignIn), call(onCartChange)]);
}
