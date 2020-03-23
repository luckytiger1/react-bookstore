import {
  SIGN_UP_CHANGE_NAME,
  SIGN_UP_CHANGE_EMAIL,
  SIGN_UP_CHANGE_PASSWORD,
  SIGN_UP_CHANGE_CONFIRM_PASSWORD,
} from '../types/actions';

const signUpUser = (state: any, action: any) => {
  if (state === undefined) {
    return {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  switch (action.type) {
    case SIGN_UP_CHANGE_NAME:
      return {
        ...state.signUp,
        displayName: action.payload,
      };
    case SIGN_UP_CHANGE_EMAIL:
      return {
        ...state.signUp,
        email: action.payload,
      };
    case SIGN_UP_CHANGE_PASSWORD:
      return {
        ...state.signUp,
        password: action.payload,
      };
    case SIGN_UP_CHANGE_CONFIRM_PASSWORD:
      return {
        ...state.signUp,
        confirmPassword: action.payload,
      };
    default:
      return state.signUp;
  }
};

export default signUpUser;
