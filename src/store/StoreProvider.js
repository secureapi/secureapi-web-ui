import React from "react";
import {
  connect,
  Provider,
  useSelector,
  useDispatch,
  useStore,
  shallowEqual,
} from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import storage from "redux-persist/lib/storage";

import store, { persistor } from "./store";

import user from "./modules/user";
import tests from "./modules/tests";

const StoreProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
);

export const actions = {
  user: user.actions,
  tests: tests.actions,
};

export const selectors = {
  user: user.selectors,
  tests: tests.selectors,
};

export default {
  storage,
  connect,
  useSelector,
  useDispatch,
  useStore,
  shallowEqual,
  Provider: StoreProvider,
};
