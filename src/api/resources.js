import { apiInstance } from './api';

export default {
  exchangeAccessToken: ({ socialType, accessToken }) => apiInstance.request({
    method: 'GET',
    url: `/users/social/${socialType}/`,
    data: {
      access_token: accessToken
    }
  }),
}