import { createSelector } from '@reduxjs/toolkit';

const tests = (state) => state.tests

export default {
  list: createSelector(tests, tests => tests.results),
};
