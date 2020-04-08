// import { takeLatest, put, all, call } from 'redux-saga/effects';
// import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from '../../types/actions';
// import {
//   auth,
//   googleProvider,
//   createUserProfileDocument,
// } from '../../firebase/firebase.utils';
// import {
//   googleSignInSuccess,
//   googleSignInFailure,
// } from '../actions/googleSignIn';
// import { emailSignInFailure, emailSignInSuccess } from '../actions/emailSignIn';

// function* signInWithGoogle() {
//   try {
//     const { user } = yield auth.signInWithPopup(googleProvider);
//     const userRef = yield call(createUserProfileDocument, user);
//     const userSnapshot = yield userRef.get();
//     yield put(
//       googleSignInSuccess({
//         id: userSnapshot.id,
//         ...userSnapshot.data(),
//       }),
//     );
//   } catch (error) {
//     yield put(googleSignInFailure(error));
//   }
// }

// type EmailAndPass = {
//   payload: {
//     email: string;
//     password: string;
//   };
// };

// function* signInWithEmail({ payload: { email, password } }: EmailAndPass) {
//   try {
//     const user = auth.signInWithEmailAndPassword(email, password);

//     const userRef: ReturnType<any> = yield call(
//       createUserProfileDocument,
//       user,
//     );
//     const userSnapshot = yield userRef.get();
//     yield put(
//       emailSignInSuccess({
//         id: userSnapshot.id,
//         ...userSnapshot.data(),
//       }),
//     );
//   } catch (error) {
//     yield put(emailSignInFailure(error));
//   }
// }
// function* onGoogleSignInStart() {
//   yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
// }
// function* onEmailSignInStart() {
//   yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
// }

// export default function* userSagas() {
//   yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
// }
