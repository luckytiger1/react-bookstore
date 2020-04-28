import {
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  AppActions,
} from '../../types/actions';

const signOutStart = (): AppActions => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};
const signOutSuccess = (): AppActions => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};
const signOutFailure = (error: any): AppActions => {
  return {
    type: SIGN_OUT_FAILURE,
    payload: error,
  };
};

export { signOutStart, signOutSuccess, signOutFailure };
