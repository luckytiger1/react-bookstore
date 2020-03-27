import {
  SIGN_UP_CHANGE_NAME,
  SIGN_UP_CHANGE_EMAIL,
  SIGN_UP_CHANGE_PASSWORD,
  SIGN_UP_CHANGE_CONFIRM_PASSWORD,
  AppActions,
} from '../../types/actions';
import { SignUpUserState } from '../../types/types';

const initialState: SignUpUserState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const signUpUser = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case SIGN_UP_CHANGE_NAME:
      return {
        ...state,
        displayName: action.payload,
      };
    case SIGN_UP_CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SIGN_UP_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SIGN_UP_CHANGE_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload,
      };
    default:
      return state;
  }
};

export default signUpUser;
