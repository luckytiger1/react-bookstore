import { GOOGLE_SIGN_IN_START, AppActions } from '../../types/actions';

const googleSignInStart = (): AppActions => {
  return {
    type: GOOGLE_SIGN_IN_START,
  };
};

export default googleSignInStart;
