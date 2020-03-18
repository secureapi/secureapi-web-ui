import { createReducer } from '@reduxjs/toolkit';

import userActions from './user.actions';

export const initialState = {
  profile: {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    company: "",
  },
  token: "",
};

export default createReducer(initialState, {
  [userActions.setToken.type]: (state, action) => {
    state.token = action.payload;
  },
  [userActions.setUserProfile.type]: (state, action) => {
    state.profile = action.payload;
  },
  [userActions.clearUser.type]: () => initialState,
});