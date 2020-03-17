import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './modules/user'

const appReducer = combineReducers({
  user: user.reducer
});

const rootReducer = (state, action) => appReducer(state, action)

const persistConfig = {
  key: '__state',
  whitelist: ['user'],
  storage
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [thunk]
});

export const persistor = persistStore(store);

export default store;