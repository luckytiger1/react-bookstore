import { createSelector } from 'reselect';

const selectUser = (state: any) => state.user;

const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);

export default selectCurrentUser;
