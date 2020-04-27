import { createSelector } from 'reselect';

const selectSignUp = (state: any) => state.signUp;

const selectDisplayName = createSelector(
  [selectSignUp],
  (signUp) => signUp.displayName,
);

const selectEmail = createSelector([selectSignUp], (signUp) => signUp.email);

const selectPassword = createSelector(
  [selectSignUp],
  (signUp) => signUp.password,
);

const selectConfirmPassword = createSelector(
  [selectSignUp],
  (signUp) => signUp.confirmPassword,
);

export {
  selectDisplayName,
  selectEmail,
  selectPassword,
  selectConfirmPassword,
};
