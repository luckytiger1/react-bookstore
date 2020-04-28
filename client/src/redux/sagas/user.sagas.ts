import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from '../../types/actions';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';
import { signOutSuccess, signOutFailure } from '../actions/signOut';
import { signUpFailure, signUpSuccess } from '../actions/signUp';
import { signInFailure, signInSuccess } from '../actions/signIn';

type EmailAndPass = {
  payload: {
    email: string;
    password: string;
  };
};

function* getSnapshotFromUserAuth(userAuth: any, additionalData: any) {
  try {
    // @ts-ignore
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData,
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user, null);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithEmail({ payload: { email, password } }: EmailAndPass) {
  try {
    const user = auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user, null);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* signUp({ payload: { email, password, displayName } }: any) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }: any) {
  try {
    yield getSnapshotFromUserAuth(user, additionalData);
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  // @ts-ignore
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
