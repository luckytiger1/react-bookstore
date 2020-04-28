import {
  SIGN_IN_EMAIL_CHANGE,
  SIGN_IN_PASSWORD_CHANGE,
  AppActions,
} from '../../types/actions';
import { SignInUserState } from '../../types/types';

const initialState: SignInUserState = {
  email: '',
  password: '',
  currentUser: null,
};

const signInUser = (
  state = initialState,
  action: AppActions,
): SignInUserState => {
  switch (action.type) {
    case SIGN_IN_EMAIL_CHANGE:
      return {
        ...state,
        email: action.payload,
      };
    case SIGN_IN_PASSWORD_CHANGE:
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
};

export default signInUser;
