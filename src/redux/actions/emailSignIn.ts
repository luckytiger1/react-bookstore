import {
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE,
  AppActions,
} from '../../types/actions';

const emailSignInStart = (emailAndPassword: object): AppActions => {
  return {
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};
const emailSignInSuccess = (user: object): AppActions => {
  return {
    type: EMAIL_SIGN_IN_SUCCESS,
    payload: user,
  };
};

const emailSignInFailure = (error: Error): AppActions => {
  return {
    type: EMAIL_SIGN_IN_FAILURE,
    payload: error,
  };
};

export { emailSignInStart, emailSignInSuccess, emailSignInFailure };
