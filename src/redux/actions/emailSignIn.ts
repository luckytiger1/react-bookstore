import { EMAIL_SIGN_IN_START, AppActions } from '../../types/actions';

const emailSignInStart = (emailAndPassword: object): AppActions => {
  return {
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

export default emailSignInStart;
