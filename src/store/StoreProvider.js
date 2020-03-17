import React from 'react';
import {
  connect,
  Provider,
  useSelector,
  useDispatch,
  useStore
} from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';

import store, { persistor } from './store';

import user from './modules/user'


const StoreProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
);

export const actions = {
  user: user.actions
}

export const selectors = {
  user: user.selectors
}

export default {
  storage,
  connect,
  useSelector,
  useDispatch,
  useStore,
  Provider: StoreProvider,
};
