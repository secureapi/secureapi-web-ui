import { createSelector } from '@reduxjs/toolkit';

const user = (state) => state.user

export default {
  user: createSelector(user, user => user.profile),
  isSignedIn: createSelector(user, user => user.token !== '')
};
