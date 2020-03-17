import axios from "axios";

import env from "variables/env";
import store from 'store/store';
import { selectors } from 'store/StoreProvider';

export const apiInstance = axios.create({
  baseURL: env.API_URL
});

apiInstance.interceptors.request.use(
  function(config) {
    const state = store.getState();
    const token = selectors.user.token(state);

    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);