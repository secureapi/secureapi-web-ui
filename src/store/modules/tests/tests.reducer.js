import { createReducer } from '@reduxjs/toolkit';

import userActions from './tests.actions';

export const initialState = {
  count: -1,
  next: '',
  previous: '',
  results: []
};

export default createReducer(initialState, {
  [userActions.setTests.type]: (state, action) => action.payload
});