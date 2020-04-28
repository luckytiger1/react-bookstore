import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  AppActions,
} from '../../types/actions';

const signUpStart = (userCreds: any): AppActions => {
  return {
    type: SIGN_UP_START,
    payload: userCreds,
  };
};
const signUpSuccess = ({ user, additionalData }: any): AppActions => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: { user, additionalData },
  };
};
const signUpFailure = (error: any): AppActions => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};

export { signUpStart, signUpSuccess, signUpFailure };
