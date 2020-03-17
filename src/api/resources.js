import { apiInstance } from './api';

export default {
  exchangeAccessToken: ({ platform, accessToken }) => apiInstance.request({
    method: 'POST',
    url: `/users/social/${platform}/`,
    data: {
      access_token: accessToken
    }
  }),
  exchangeCode: ({ code, state }) => apiInstance.request({
    method: 'POST',
    url: '/users/code/',
    data: {
      code,
      state
    }
  }),
  getUserTests: ({ limit, offset } = {}) => apiInstance.request({
    method: 'GET',
    url: '/tests/my',
    params: {
      limit,
      offset
    }
  }),
  getUserProfile: () => apiInstance.request({
    method: 'GET',
    url: '/users/profile',
  }),
  updateUserProfile: (profile) => apiInstance.request({
    method: 'PATCH',
    url: '/users/profile',
    data: profile
  }),
}