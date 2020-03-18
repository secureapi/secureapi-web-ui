import { createSelector } from '@reduxjs/toolkit';

const user = (state) => state.user

export default {
  profile: createSelector(user, user => user.profile),
  isSignedIn: createSelector(user, user => user.token !== ''),
  token: createSelector(user, user => user.token),
};
