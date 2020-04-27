import {
  AppActions,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from '../../types/actions';

const signInSuccess = (user: object): AppActions => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user,
  };
};
const signInFailure = (error: any) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};

export { signInSuccess, signInFailure };
