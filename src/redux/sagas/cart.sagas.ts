import { all, call, takeLatest, put } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS } from '../../types/actions';
import { clearCart } from '../actions/changeBooks';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
