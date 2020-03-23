import {
  SIGN_IN_EMAIL_CHANGE,
  SIGN_IN_PASSWORD_CHANGE,
  SIGN_IN_WITH_GOOGLE,
} from '../types/actions';

const signInUser = (state: any, action: any) => {
  if (state === undefined) {
    return {
      email: '',
      password: '',
      currentUser: null,
    };
  }

  switch (action.type) {
    case SIGN_IN_EMAIL_CHANGE:
      return {
        ...state.auth,
        email: action.payload,
      };
    case SIGN_IN_PASSWORD_CHANGE:
      return {
        ...state.auth,
        password: action.payload,
      };
    case SIGN_IN_WITH_GOOGLE:
      return {
        ...state.auth,
        currentUser: action.payload,
      };
    default:
      return state.auth;
  }
};

export default signInUser;
