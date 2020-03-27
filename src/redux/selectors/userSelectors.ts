import { createSelector } from 'reselect';

const selectUser = (state: any) => state.auth;

const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);

export default selectCurrentUser;
