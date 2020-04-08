import {
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  AppActions,
} from '../../types/actions';

const googleSignInStart = (): AppActions => {
  return {
    type: GOOGLE_SIGN_IN_START,
  };
};
const googleSignInSuccess = (user: object): AppActions => {
  return {
    type: GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
  };
};

const googleSignInFailure = (error: Error): AppActions => {
  return {
    type: GOOGLE_SIGN_IN_FAILURE,
    payload: error,
  };
};

export { googleSignInStart, googleSignInSuccess, googleSignInFailure };
